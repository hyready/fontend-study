new Vue({
    el: '#app',
    data: {
        appName: '妙味云盘',

        // 显示模式：缩略图、列表
        showMode: 'thumb',
        // 显示的文件类型
        showType: 'all',
        // 类型与MIME的映射关系
        MIMEMAPS: {
            doc: ['text/html', 'text/css'],
            pic: ['image/png', 'image/gif'],
            music: ['audio/mp3'],
            video: ['video/mp4'],
        },
        files: [
            // 每一个对象就是一个文件夹、文件信息
            {
                // 文件夹、文件的名称
                name: '文件夹1',
                // 类型，如果为空，则为文件夹
                type: ''
            },
            {
                name: '文件夹2',
                type: ''
            },
            {
                name: '1.html',
                type: 'text/html'
            },
            {
                name: '1.css',
                type: 'text/css'
            },
            {
                name: '朋友.mp3',
                type: 'audio/mp3'
            },
            {
                name: 'vue案例.mp4',
                type: 'video/mp4'
            },

        ],
    },

    computed: {
        //每一个计算属性都是一个函数，返回值就是这个属性对应的属性值
        folderFiles() {
            return this.showType === 'all' ? this.files.filter(item => item.type === '') : [];
        },
        otherFiles() {
            let otherFiles = this.files.filter(item => item.type !== '');
            if (this.showType === 'all') {
                return otherFiles;
            } else {
                return otherFiles.filter(item => this.MIMEMAPS[this.showType].includes(item.type))
            }
        }
    },
    methods: {
        changeShowMode(type) {
            this.showMode = type;
        },
        changeShowType(type) {
            this.showType = type;
        }
    }
})