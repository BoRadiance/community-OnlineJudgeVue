<template>
  <div class="tinymce-editor">
    <editor v-model="myValue"
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
    </editor>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/themes/modern/theme'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/lists'
  import 'tinymce/plugins/contextmenu'
  import 'tinymce/plugins/wordcount'
  import 'tinymce/plugins/colorpicker'
  import 'tinymce/plugins/textcolor'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/codesample'
  import 'tinymce/plugins/help'
  import 'tinymce/plugins/charmap'
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/fullscreen'
  import {host} from "../api/api";

  import axios from 'axios'

  export default {
    components: {
      Editor
    },
    props: {
      //传入一个value，使组件支持v-model绑定
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plugins: {
        type: [String, Array],
        default: 'lists image  table textcolor wordcount contextmenu code codesample  textcolor charmap link fullscreen'
      },
      toolbar: {
        type: [String, Array],
        default: ' undo redo |  formatselect  forecolor textcolor strikethrough superscript  subscript | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image codesample   link charmap table code | removeformat wordcount fullscreen'
      }
    },
    data() {
      return {
        //初始化配置
        init: {
          language_url: '/static/tinymce/langs/zh_CN.js',
          language: 'zh_CN',
          skin_url: '/static/tinymce/skins/lightgray',
          height: 300,
          plugins: this.plugins,
          paste_data_images: true, // 允许粘贴图像
          toolbar: this.toolbar,
          branding: false,
          menubar: true,
          default_link_target: '_blank',

          //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
          //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
          // 图片上传三个参数，图片数据，成功时的回调函数，失败时的回调函数
          images_upload_handler: function (blobInfo, success, failure) {
            if (blobInfo.blob().size > self.maxSize) {
              failure('文件体积过大')
            }
            let  that = this ;
            function uploadPic () {
              let formData = new FormData()
              // 服务端接收文件的参数名，文件数据，文件名
              formData.append('file', blobInfo.blob(), blobInfo.filename())
              axios({
                method: 'POST',
                // 这里是你的上传地址
                url: `${host}/uploadfile/`,
                data: formData,
              })
                .then((response) => {
                  success(response.data.data.url)
                })
                .catch(() => {
                  failure('上传失败')
                })
            }
            uploadPic();
          }
        },
        myValue: this.value
      }
    },
    mounted() {
      tinymce.init({})
    },
    methods: {
      //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
      //需要什么事件可以自己增加
      onClick(e) {
        this.$emit('onClick', e, tinymce)
      },
      //可以添加一些自己的自定义事件，如清空内容
      clear() {
        this.myValue = ''
      }
    },

    watch: {
      value(newValue) {
        this.myValue = newValue
      },
      myValue(newValue) {
        this.$emit('input', newValue)
      }
    }
  }

</script>
<style scoped>
</style>

