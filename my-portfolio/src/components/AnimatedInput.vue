<template>
    <div class="animated-input-container">
        <input ref="inputRef" :type="type" :id="inputId" v-model="inputValue" class="animated-input" @focus="isFocused = true"
            @blur="handleBlur" @input="handleInput" />
        <label :for="inputId" class="animated-label" :class="{ 'active': isActive }">
            {{ label }}
        </label>
        <div class="input-line" :class="{ 'active': isFocused }"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, onMounted, defineExpose } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const inputId = ref(`animated-input-${Math.random().toString(36).substr(2, 9)}`)
const isFocused = ref(false)
const inputRef = ref<HTMLInputElement | null>(null);
const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const isActive = computed(() => {
    return isFocused.value || inputValue.value.length > 0
})

const handleBlur = () => {
    isFocused.value = false
}

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

const focus = () => {
    inputRef.value?.focus();
};

defineExpose({
    focus
});

onMounted(() => {
    if (props.required) {
        console.log(`${props.label} is required`);
    }
});
</script>

<style scoped>
.animated-input-container {
    position: relative;
    margin: 20px 0;
    width: 100%;
    font-family: "Noto Sans Display", sans-serif;
}

.animated-input {
    width: 100%;
    padding: 12px 0 8px 0;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--Black);
    outline: none;
    transition: all 0.3s ease;
}

.animated-label {
    position: absolute;
    left: 0;
    top: 12px;
    font-size: 1rem;
    color: #999;
    pointer-events: none;
    transition: all 0.3s ease;
    transform-origin: left top;
}

.animated-label.active {
    transform: translateY(-20px) scale(0.8);
    color: var(--Black);
    font-weight: 500;
}

.input-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--Black);
    transition: none;
}

.animated-input:focus+.animated-label {
    transform: translateY(-20px) scale(0.8);
    color: var(--Black);
    font-weight: 500;
}
</style>