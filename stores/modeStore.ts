import { defineStore } from 'pinia';
import { ref } from 'vue';

type Mode = 'grid' | 'carousel';

export const useModeStore = defineStore('modeStore', () => {
    const mode = ref<Mode>('grid');

    function setMode(newMode: Mode) {
        mode.value = newMode;
    }

    return {
        mode,
        setMode,
    };
});