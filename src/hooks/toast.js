import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export const useToast = () => {
    const store = useStore();
    const showToast = computed(() => store.state.toastMessage);
    const toastMessage = computed(() => store.state.toastAlertType);
    const toastAlertType = computed(() => store.state.showToast);
    const timeout = computed(() => store.state.timeout);
    const triggerToast = (message, type = 'success') => {
            toastMessage.value = message;
            toastAlertType.value = type;
            showToast.value = true;
            timeout.value = setTimeout(() => {
                console.log('hello');
                toastMessage.value = '';
                toastAlertType.value = '';
                showToast.value = false;
            }, 5000);
        }
        
    onMounted(() => {
     clearTimeout(timeout.value);
    });

        return{
            toastMessage,
            toastAlertType,
            showToast,
            triggerToast
        }
}