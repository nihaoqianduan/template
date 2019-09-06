import Vue from 'vue';
import PicPreview from './ImagePreview';
import { isArray } from '@/utils';

function initInstance (images) {
  const PicExtend = Vue.extend(PicPreview);
  const picELe = new PicExtend({
    el: document.createElement('div'),
    data: {
      list: images
    }
  })
  return picELe;
}

class ImagePreview extends initInstance {
  constructor(imgs) {
    super();
    if (!imgs) {
      console.error('入参不能为空')
      return;
    }
    if (!isArray(imgs)) {
      console.error('入参格式不对，入参预期是Array');
      return;
    }
    document.body.appendChild(this.$el)
    this.images = imgs;
  }
}

export default ImagePreview;
