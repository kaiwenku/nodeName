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

// 错误处理中间件
app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    res.status(statusCode).json({ success: false, message });
});
// 启动服务器
app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
});