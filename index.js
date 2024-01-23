const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
// 解析POST请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 处理根路径的 GET 请求
/**
 * 获取托尼老师集合
 */
app.get('/getTonyList', (req, res) => {
    const users = [{
        id: 1,
        myself: "https://img-qn.51miz.com/preview/photo/00/01/69/02/P-1690246-BA2D45B9.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fw/720",
        userName: "托尼",
        mark: 4,
        directorName: "高级总监",
        telephone: 12344464647,
    }, {
        id: 2,
        myself: "https://img-qn.51miz.com/preview/photo/00/01/69/07/P-1690747-AC6B3197.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fw/300",
        userName: "蓝尼",
        directorName: "总监",
        mark: 3,
        telephone: 2312432532,
    }, {
        id: 3,
        myself: "https://assets.juksy.com/files/articles/120846/800x_100_w-64143ff6c7c20.jpg",
        userName: "马克",
        directorName: "技师",
        mark: 4,
        telephone: 13255007810,
    }]
    res.json({
        status: 200,
        success: true,
        data: users
    });
});


// 处理POST请求

/**
 * 获取托尼老师的项目
 */
app.post('/getProjectList', (req, res) => {
    const { id } = req.body;
    if (!id) {
        const error = new Error('id必填');
        error.statusCode = 400;
        throw error;
    } else {
        // Do something with the data
        const users = [{
            id: 1,
            userName: "托尼",
            directorName: "高级总监",
            projectList: [{
                projectName: '洗剪吹1',
                price: 199,
                projectId: 1
            }, {
                projectName: '洗剪吹3',
                price: 99,
                projectId: 2
            }, {
                projectName: '洗剪吹2',
                price: 89,
                projectId: 3
            }]
        }, {
            id: 2,
            userName: "蓝尼",
            directorName: "总监",
            projectList: [{
                projectName: '洗1',
                price: 21,
                projectId: 1
            }, {
                projectName: '洗3',
                price: 32,
                projectId: 2
            }, {
                projectName: '洗2',
                price: 44,
                projectId: 3
            }]
        }, {
            id: 3,
            userName: "马克",
            directorName: "技师",
            projectList: [{
                projectName: '染发1',
                price: 121,
                projectId: 1
            }, {
                projectName: '染发1',
                price: 132,
                projectId: 2
            }, {
                projectName: '染发1',
                price: 144,
                projectId: 3
            }]
        }]
        const index = users.findIndex(item => item.id == id)
        res.send({
            status: 200,
            success: true,
            data: users[index]
        });
    }

});

/**
 * 获取托尼老师的项目
 */
app.post('/getContextOwner', (req, res) => {
    const { id } = req.body;
    if (!id) {
        const error = new Error('id必填');
        error.statusCode = 400;
        throw error;
    } else {
        res.send({
            status: 200,
            success: true,
            data: {
                interval: 0.5,
                startTme: '10:00:00',
                endTime: '18:00:00',
                haveSelectTime: ['2024/1/12 10:00:00', '2024/1/13 17:00:00', '2024/1/14 13:00:00'],
                telephone: 12345678910,
            }
        });
    }

});

app.post('/getOrderList', (req, res) => {
    const { type } = req.body;
    if (!type) {
        const error = new Error('type必填');
        error.statusCode = 400;
        throw error;
    } else {

        res.send({
            status: 200,
            success: true,
            data: [{
                typeId: 1, //待服务
                staPhoto: 'https://img0.baidu.com/it/u=1752903520,1572100722&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704474000&t=ec05191bc620eefc03dc7301a080581d', // 头像
                staName: '小王托尼', // 没有名字的时候显示到店再选
                endTime: '2024-01-05 09:00:00',
                pictureId: 'https://img2.baidu.com/it/u=2669194735,3217376955&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704474000&t=bec75432bd7b22884442ecbbf5bbbbc6', // 项目图
                serveName: '洗剪吹',
                consumptionState: 1,
                ordAchievement: 199, // 应付款金额
                paymentCustomerName: '可爱多',
                cusHeadPortrait: 'https://img2.baidu.com/it/u=4260210395,2753506949&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704474000&t=bc650d45794e38cbcc9b7ee86bcb6de4', //顾客头像
                // giftOrderId: '12', //赠送id，有值代表是赠送的
                // orderType: '店开单', // 店开单不可以修改时间
            },
            {
                typeId: 2, //待服务
                staPhoto: 'https://img2.baidu.com/it/u=255089752,2114889504&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704474000&t=d269dd9dec4949aee59b3e9ebd281535', // 头像
                staName: '小张托尼', // 没有名字的时候显示到店再选
                endTime: '2024-01-05 09:00:00',
                pictureId: 'https://img0.baidu.com/it/u=718040954,3178422701&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704474000&t=6ef89fa14de4ac74624a867c451f1101',
                serveName: '洗头',
                consumptionState: 1,
                ordAchievement: 19, // 应付款金额
                paymentCustomerName: '旺仔',
                cusHeadPortrait: 'https://img2.baidu.com/it/u=1297740018,2772695612&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704474000&t=2209c3ae74e2dac5a0bffa7fbbb93764', //顾客头像
                // giftOrderId: null, //赠送id，有值代表是赠送的
                // orderType: '预约单', // 店开单不可以修改时间
            }
            ]
        });


    }

});
/**
 * 获取托尼老师的项目
 */
app.get('/getLocationStore', (req, res) => {

    res.send({
        status: 200,
        success: true,
        data: [{
            stoProvince: '上海市',
            stoCity: '嘉定区',
            cityId: 1,
            storeList: [{
                storeId: 1,
                stoName: '上海1店',
                stoAddress: '万达1店'
            }],

        }, {
            stoProvince: '上海市',
            cityId: 2,
            stoCity: '杨浦区',
            storeList: [{
                storeId: 1,
                stoName: '上海2店',
                stoAddress: '万达2店'
            }, {
                storeId: 2,
                stoName: '上海3店',
                stoAddress: '万达3店'
            }],

        }
            , {
            stoProvince: '四川省',
            cityId: 3,
            stoCity: '成都市',
            storeList: [{
                storeId: 1,
                stoName: '成都2店',
                stoAddress: '万达一号店'
            }],

        },
        ]
    });

});

// 学习堂首页
app.post('/applet/video/list', (req, res) => {
    const {
        videoName, // 视频名字模糊搜索
        pageNumber = 1, // 代表第几页
        typeId = 1, // 1 最新，2 排行
        pageCount = 3 // 代表每页多少查询数量
    } = req.body
    let list = [{
        videoId: 1,
        videoName: '视频1',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 2,
        videoName: '视频2',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 3,
        videoName: '视频3',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 4,
        videoName: '视频4',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 5,
        videoName: '视频5',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 6,
        videoName: '视频6',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 7,
        videoName: '视频7',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 8,
        videoName: '视频8',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 9,
        videoName: '视频9',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }, {
        videoId: 10,
        videoName: '视频10',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',
        category: 0,
        createTime: '2022-03-10 12:00:00',
    }]
     list = videoName ? list.filter(item => item.videoName.includes(videoName)) : list

    list = list.slice((pageNumber - 1) * pageCount, pageNumber * pageCount)
    res.send({
        status: 200,
        success: true,
        data: list
    });
})
/**
 * 学习堂详情
 */
app.post('/applet/video' ,(req, res) => {
    const { typeId } = req.body
    res.send({
        status: 200,
        success: true,
        data: {
            displayAttention: 1,
            displayReport: 1,
            createTime: '2022-03-10 12:00:00',
            videoName: '视频9',
            relatedVideo: [{
                videoId: 11,
                videoName: '视频11',
                videoImg: 'https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1705338000&t=c19f05e593598f77d390aa9205417747',

                videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            }],

        }
    })
})
/**
 * 会员卡列表
 */
app.post('/vipCar/list', (req,res)=>{
    const { carType,carName } = req.body
    res.send({
        status: 200,
        success: true,
        data: [{
            vipCarId: 1,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 2,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 3,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 4,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 5,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 6,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 7,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 8,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 9,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        },{
            vipCarId: 10,
            vipCarPrice: 100,
            vipCarType: carType,
            carName,
        }]
    })
})
/**
 * 会员卡详情
 */
app.post('/vipCar/detail', (req,res)=>{
    const { vipCarId } = req.body
    res.send({
        status: 200,
        success: true,
        data: {
            name:'超级年会卡',
            vipCarNumber: "XXM12345678",
            description:'这里是会员卡',
            useNumber: 2,
            price: 199,
            endTime :' 2024-12-12 00:00:00'
        }
    })
})

/**
 * 购物袋
 */
app.get('/shopping/list', (req,res)=>{
    res.send({
        status: 200,
        success: true,
        data: [{
            id:1,
            name:'飞扬洗发水',
            price: 199,
            number: 3, //库存数量
            url:'https://t15.baidu.com/it/u=978951149,3305181654&fm=224&app=112&size=h200&n=0&f=PNG?sec=1705510800&t=d50bdb18f31d93edcdb093981066a107',
            specification:  '500ml',
            
        },{
            id:2,
            name:'吊牌洗发水',
            price: 99,
            number: 5, //库存数量
            url:'https://t14.baidu.com/it/u=2855219380,604209711&fm=224&app=112&size=h200&n=0&f=PNG?sec=1705510800&t=550372cc97664eb40f90d15bd41f325e',
            specification:  '100ml',
            
        }]
    })
})
/**
 * 店卖品列表
 */
app.post('/store/list', (req,res)=>{
    const { page=1, size=3 } = req.body
   let list = [{
        id:1,
        brand:'飞扬', //品牌
        class:'洗发水', //类别
        name:'飞扬去屑', //名称
        specification:'ml', //规格
        
    },{
        id:2,
        brand:'飞扬',
        class:'沐浴露',
        name:'飞扬沐浴露',
        specification:'ml',
        
    },{
        id:3,
        brand:'舒肤佳',
        class:'香皂',
        name:'舒肤佳香皂',
        specification:'个',
        
    },{
        id:4,
        brand:'嗷嗷',
        class:'梳子',
        name:'黑木梳子',
        specification:'个',
        
    },{
        id:5,
        brand:'xx',
        class:'毛巾',
        name:'三层加厚',
        specification:'条',
        
    },{
        id:6,
        brand:'爱心',
        class:'洗脸巾',
        name:'洗脸巾',
        specification:'包',
        
    },{
        id:3,
        brand:'海飞丝',
        class:'洗发水',
        name:'清爽海飞丝',
        specification:'ml',
    }]
    list = list.slice((page - 1) * size, page * size)
    res.send({
        status: 200,
        success: true,
       data:list
    })
})
/**
 * 项目列表
 */
app.get('/project/list',(req,res)=>{
    res.send({
        status: 200,
        success: true,
        data: [{
            id:1,
            name:'洗剪吹全套',
            url:'https://t15.baidu.com/it/u=978951149,3305181654&fm=224&app=112&size=h200&n=0&f=PNG?sec=1705510800&t=d50bdb18f31d93edcdb093981066a107',
           
            
        },{
            id:2,
            name:'烫染二选一',
            url:'https://t14.baidu.com/it/u=2855219380,604209711&fm=224&app=112&size=h200&n=0&f=PNG?sec=1705510800&t=550372cc97664eb40f90d15bd41f325e',
         
            
        },{
            id:3,
            name:'拉直二选一',
            url:'https://t14.baidu.com/it/u=2855219380,604209711&fm=224&app=112&size=h200&n=0&f=PNG?sec=1705510800&t=550372cc97664eb40f90d15bd41f325e',
         
            
        }]
    })
})
// 错误处理中间件
app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    res.status(statusCode).json({ success: false, message });
});
// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
