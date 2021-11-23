<template>
  <!-- 消息列表 -->
  <transition name="fade" v-show="visible">
    <!-- 内容 -->
    <div class="message-content-wrap">
      <div class="message-content">
        <!-- 消息类型图标，通过消息类型确定，text类型不配置图标 -->
        <i :class="iconClass" class="message-icon"></i>
        <!-- 消息文本 -->
        <span v-text="message" class="message-text"></span>
        <!-- 手动关闭 -->
        <i
          v-if="showClose || continued === 0"
          class="message-icon-close h-icon-x"
          @click.stop="close"
        ></i>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
export default defineComponent({
  props: {
    message: { type: String },
    type: { type: String },
    icon: { type: String },
    continued: { type: Number, default: 3000 },
    showClose: { type: Boolean, default: false },
    id: { type: String, default: "" },
  },
  setup(props) {
    const iconClass = computed(() => {
      if (!props.icon) {
        switch (props.type) {
          case "success":
            return "h-icon-check-circle-fill";
          case "warning":
            return "h-icon-exclamation-triangle-fill";
          case "error":
            return "h-icon-exclamation-circle-fill";
          case "info":
            return "h-icon-info";
          default:
            return "h-icon-info-circle-fill";
        }
      } else {
        return props.icon || "h-icon-info-circle-fill";
      }
    });
    // datas
    let visible = ref(false);
    let timer = ref(null);

    // hooks
    onMounted(() => {
      visible.value = true;
      // console.log(getCurrentInstance());
      // 如果continued不是0， 组件存在规定时间continued毫秒后进行卸载
      if (props.continued !== 0) {
        timer.value = setTimeout(() => {
          visible.value = false;
          clearTimer();
        }, props.continued);
      }
    });
    onUnmounted(() => {
      clearTimer();
    });

    // funcs
    const close = () => {
      clearTimer();
    };
    // 清除定时器
    const clearTimer = () => {
      timer = null;
      clearTimeout(timer);
      unmount();
    };
    // 卸载组件;
    const unmount = () => {
      const parentNode = document.getElementById(props.id);
      if (parentNode) document.body.removeChild(parentNode);
    };
    return {
      iconClass,
      visible,
      // funcs
      close,
    };
  },
});
</script>

<style scoped>
.fade-enter-active {
  animation: tip-fade-in 0.2s;
}
.fade-leave-active {
  animation: tip-fade-out 0.2s;
}

@keyframes tip-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes tip-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

.message-content-wrap {
  position: absolute;
  top: 30px;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.message-content {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  min-width: 380px;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s linear;
}
.message-text {
  flex: 1 1 auto;
}
.message-icon {
  margin-right: 5px;
}
.message-icon,
.message-icon-close {
  width: 30px;
  cursor: pointer;
}
.h-icon-x {
  font-size: 20px;
}
</style>
