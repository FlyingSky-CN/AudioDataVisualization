const config = {

    /**
     * 画布宽度 
     */
    width: 700,

    /**
     * 画布高度
     */
    height: 70,

    /**
     * 多倍绘制
     */
    multiple: 5,

    /**
     * 柱子间隙
     */
    space: 5,

    /**
     * 圆角
     */
    round: true,

    /**
     * 基础长度倍数
     */
    basic: 1.5,

    /**
     * fftSize (Fast Fourier Transform) 是快速傅里叶变换，一般情况下是固定值2048。
     * 具体作用是什么我也不太清除，但是经过研究，这个值可以决定音频频谱的密集程度。
     * 值大了，频谱就松散，值小就密集。
     */
    fftSize: 128,

    /**
     * 忽略
     */
    ignore: 12,

    /**
     * 背景颜色
     */
    background: '#FFF',

    /**
     * 填充色
     */
    fill: '#5C5C5C',

    /**
     * 绘制方向 (top/center/bottom)
     */
    way: 'top',

}