const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    audio: [
    {
        name: 'jump in', 
        artist: 'めぐみん(CV:高橋李依)、ゆんゆん(CV:豊崎愛生)',
        url: '/music/jump%20in.m4a',
        cover: '/music/jump%20in.jpg',
    },
    {
        name: 'spiral', 
        artist: 'LONGMAN',
        url: '/music/spiral.m4a',
        cover: '/music/spiral.jpg',
    },
    {
        name: 'Call of Silence', 
        artist: '泽野弘之',
        url: '/music/Call%20of%20Silence.m4a',
        cover: '/music/Call%20of%20Silence.jpg',
    },
    {
        name: '一格格', 
        artist: '卫兰',
        url: '/music/一格格.aac',
        cover: '/music/一格格.jpg',
    },
	]
});