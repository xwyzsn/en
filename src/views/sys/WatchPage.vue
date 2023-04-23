<template>
    <div class="w-full h-full">
        <div class="w-2/3 m-auto h-full bg-slate-50">
            <div class="m-auto w-full flex justify-center pt-10 ">
                <vue3VideoPlay v-bind="options" poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg" />
            </div>
            <el-divider class="w-full ">
            </el-divider>
            <div class="w-full space-y-2">
                <div class="w-full">
                    <el-button type="primary" @click="startRecord"> 开始录音</el-button>
                    <el-button @click="stopRecord">结束录音 </el-button>
                    <el-button type="danger" @click="destory">删除录音</el-button>
                    <el-button type="info" @click="submit"> 提交测评</el-button>

                </div>
                <div class="w-full">
                    <audio-player v-if="audios.length > 0" ref="audioPlayer" :audio-list="audios.map(elm => elm.url)"
                        theme-color="#ff2929" :show-prev-button="false" :show-next-button="false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup >
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import Recorder from 'js-audio-recorder';
import { ElMessage, ElLoading } from "element-plus";
let recorder = new Recorder(
    {
        sampleBits: 16,                 // 采样位数，支持 8 或 16，默认是16
        sampleRate: 16000,              // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
        numChannels: 1,
    }
);
let audios = ref([
])
let duration = ref(0)
let totalDuration = ref(0)
const startRecord = () => {
    recorder.start().then(() => {
        console.log('开始录音');
        ElMessage.success('开始录音')
    }).catch((e) => {
        console.error(e);
    });
}
const stopRecord = () => {
    recorder.stop()
    totalDuration.value = recorder.duration
    let blob = recorder.getWAVBlob();
    audios.value.push({
        name: '音频1',
        url: URL.createObjectURL(blob)
    })
    ElMessage.success('结束录音')
}
const playRecord = () => {
    let blob = recorder.getPCMBlob();

    duration.value = 0;
    let id = setInterval(() => {
        duration.value = duration.value + 1;
    }, 1000)
    window.setTimeout(function () {
        window.clearInterval(id);
    }, recorder.duration * 1000);
    recorder.play(blob);
}
const destory = () => {
    recorder.destroy();
    duration.value = 0;
    totalDuration.value = 0;
    audios.value = []
}

const submit = () => {
    ElMessage.success('提交成功')
    const loadingInstance = ElLoading.service({
        text: '正在测评'
    })
    setTimeout(() => {
        loadingInstance.close()
    }, 4000)

}

const route = useRoute();
const { query } = route;
console.log(query);
const options = reactive({
    width: "800px", //播放器宽度
    height: "450px", //播放器高度
    color: "#409eff", //主题色
    title: "", //视频名称
    src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
    muted: false, //静音
    webFullScreen: false,
    speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
    autoPlay: false, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: false, //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns: [
        "audioTrack",
        "quality",
        "speedRate",
        "volume",
        "setting",
        "pip",
        "pageFullScreen",
        "fullScreen",
    ], //显示所有按钮,
});
</script>

<style scoped></style>