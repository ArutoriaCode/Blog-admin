import { Breakpoint } from '@/utils/breakpoint';
import { onBeforeMount, onBeforeUnmount, onMounted, reactive } from 'vue';
function useBreakpoint() {
  const breakpoint = reactive(
    new Breakpoint({
      mobileBreakpoint: "sm",
      scrollBarWidth: 16,
      thresholds: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1264
      }
    })
  );

  onBeforeMount(() => {
    breakpoint.init();
  })

  onBeforeUnmount(() => {
    breakpoint.remove()
  })

  return breakpoint;
}

export default useBreakpoint;