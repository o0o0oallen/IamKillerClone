! function () {
  "use strict";
  var e, t, i = Laya.ClassUtils.regClass;
  ! function (e) {
    class t extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(t.uiView)
      }
    }
    t.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/ReviveView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          y: 0,
          x: 0,
          var: "jumpUi",
          skin: "ui/result_ninja.png",
          scaleY: 2,
          scaleX: 2,
          name: "jumpUi",
          centerY: 0,
          centerX: 0,
          anchorY: .5,
          anchorX: .5
        },
        compId: 13
      }],
      loadList: ["ui/result_ninja.png"],
      loadList3D: []
    }, e.AniViewUI = t, i("ui.AniViewUI", t);
    class o extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(o.uiView)
      }
    }
    o.uiView = {
      type: "View",
      props: {
        width: 640,
        scaleX: 1,
        mouseEnabled: !0,
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          y: 0,
          x: 0,
          var: "deal",
          top: 0,
          skin: "ui/mask.png",
          scaleY: .8,
          scaleX: .8,
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 3,
        child: [{
          type: "Image",
          props: {
            width: 621,
            skin: "ui/skin_bg.png",
            height: 922,
            centerY: -100,
            centerX: 0
          },
          compId: 4,
          child: [{
            type: "Label",
            props: {
              y: 44,
              wordWrap: !0,
              width: 238,
              valign: "middle",
              text: "隐私协议",
              strokeColor: "#000000",
              height: 72,
              fontSize: 50,
              font: "SimHei",
              color: "#000000",
              centerX: 0,
              bold: !0,
              align: "center"
            },
            compId: 6
          }, {
            type: "Text",
            props: {
              y: 188,
              x: 74,
              wordWrap: !0,
              width: 474,
              var: "txt",
              vScrollBarSkin: "ui/vscroll.png",
              text: "隐私协议生效时间：2021/10/19    隐私政策更新时间：2021/11/23          本游戏尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在征得您的同意前，本软件不会将这些信息向其他人或向第三方提供。本软件会不定时更新本隐私权政策。您在同意本软件服务使用协议之时，即表示您已经同意本隐私权政策的全部内容。本隐私权政策属于本软件服务使用协议不可分割的一部分。  适用范围 a) 本游戏为单机游戏，暂时不会需要任何您的个人信息，如果后期需要个人信息，将会更新此隐私政策。 信息使用 a) 本游戏不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息。 b) 本游戏亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。 信息披露 在如下情况下，本游戏依据您的个人意愿或法律的规定全部或部分的披露您的个人信息： a) 经您事先同意，向第三方披露； b) 为提供您所要求的产品和服务，而必须和第三方分享您的个人信息； c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露； d) 如您出现违反中国有关法律、法规或者本游戏服务协议或相关规则的情况，需要向第三方披露； e) 如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷； 信息存储和交换 本软件收集的有关您的信息和资料将保存在本软件及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本软件收集信息和资料所在地的境外并在境外被访问、存储和展示。 信息安全 a)在使用本游戏进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，请您立即联络本软件客服，以便本软件采取相应措施。                           抵制不良游戏，拒绝盗版游戏。   注意自我保护，谨防受骗上当。   适度游戏益脑，沉迷游戏伤身。   合理安排时间，享受健康生活。",
              overflow: "scroll",
              height: 623,
              fontSize: 30,
              font: "Microsoft YaHei",
              color: "#000000",
              runtime: "laya.display.Text"
            },
            compId: 15
          }]
        }, {
          type: "Image",
          props: {
            width: 400,
            var: "dealAgree",
            skin: "ui/btn_blue.png",
            sizeGrid: "20,20,35,20",
            scaleY: .7,
            scaleX: .7,
            height: 150,
            centerY: 436,
            centerX: 149,
            anchorY: .5,
            anchorX: .5
          },
          compId: 7,
          child: [{
            type: "Label",
            props: {
              y: 0,
              x: 0,
              text: "同意",
              fontSize: 70,
              font: "Microsoft YaHei",
              color: "#ffffff",
              centerY: 0,
              centerX: 0,
              bold: !1
            },
            compId: 21
          }]
        }, {
          type: "Image",
          props: {
            width: 400,
            var: "dealClose",
            skin: "ui/btn_gray.png",
            sizeGrid: "20,20,35,20",
            scaleY: .7,
            scaleX: .7,
            height: 150,
            centerY: 436,
            centerX: -151,
            anchorY: .5,
            anchorX: .5
          },
          compId: 17,
          child: [{
            type: "Label",
            props: {
              text: "取消",
              fontSize: 65,
              font: "Microsoft YaHei",
              color: "#ffffff",
              centerY: 0,
              centerX: 0,
              bold: !1
            },
            compId: 19
          }]
        }]
      }],
      loadList: ["ui/mask.png", "ui/skin_bg.png", "ui/vscroll.png", "ui/btn_blue.png", "ui/btn_gray.png"],
      loadList3D: []
    }, e.DealViewUI = o, i("ui.DealViewUI", o);
    class n extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(n.uiView)
      }
    }
    n.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/GameView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Box",
        props: {
          var: "game_mouse",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 3
      }, {
        type: "Image",
        props: {
          var: "progressL",
          top: 180,
          skin: "ui/ui_bar_white.png",
          scaleY: 1.5,
          scaleX: 1.5,
          name: "progressL",
          centerX: 0
        },
        compId: 4,
        child: [{
          type: "Image",
          props: {
            width: 100,
            var: "game_level_bar",
            skin: "ui/ui_bar_green.png",
            sizeGrid: "0,0,0,298",
            left: 0,
            centerY: 0
          },
          compId: 5
        }, {
          type: "Image",
          props: {
            skin: "ui/btn_green.png",
            scaleY: .3,
            scaleX: .3,
            left: -25,
            centerY: 0
          },
          compId: 7,
          child: [{
            type: "FontClip",
            props: {
              y: 29,
              width: 100,
              var: "game_level_cur",
              value: "1",
              skin: "ui/ui_number_whire.png",
              sheet: "0123456789",
              scaleY: .5,
              scaleX: .5,
              centerY: 0,
              centerX: 0,
              align: "center"
            },
            compId: 6
          }]
        }, {
          type: "Image",
          props: {
            y: 0,
            skin: "ui/btn_gray.png",
            scaleY: .3,
            scaleX: .3,
            right: -25,
            centerY: 0
          },
          compId: 8,
          child: [{
            type: "FontClip",
            props: {
              y: 29,
              width: 100,
              var: "game_level_next",
              value: "2",
              skin: "ui/ui_number_whire.png",
              sheet: "0123456789",
              scaleY: .5,
              scaleX: .5,
              centerY: 0,
              centerX: 0,
              align: "center"
            },
            compId: 9
          }]
        }]
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "game_win",
          skin: "ui/btn_orange.png",
          sizeGrid: "20,20,30,20",
          centerY: 0,
          centerX: 0
        },
        compId: 13,
        child: [{
          type: "Label",
          props: {
            text: "胜利",
            fontSize: 40,
            font: "SimHei",
            color: "#ffffff",
            centerY: 0,
            centerX: 0,
            bold: !0
          },
          compId: 16
        }]
      }, {
        type: "Image",
        props: {
          width: 280,
          var: "LevelsX",
          skin: "ui/K2.png",
          sizeGrid: "0,0,0,0",
          scaleY: 1,
          scaleX: 1,
          name: "LevelsX",
          height: 80,
          centerY: -303,
          centerX: 0,
          anchorY: .5,
          anchorX: .5
        },
        compId: 22,
        child: [{
          type: "Image",
          props: {
            x: 15,
            width: 24,
            skin: "ui/hud_levelprogress_stage.png",
            name: "D1",
            height: 60,
            centerY: 0
          },
          compId: 23,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: -1,
              width: 25,
              skin: "ui/B.png",
              height: 60
            },
            compId: 36
          }]
        }, {
          type: "Image",
          props: {
            y: 10.5,
            x: 45,
            width: 24,
            skin: "ui/hud_levelprogress_shopstage.png",
            name: "D2",
            height: 60,
            centerY: 0
          },
          compId: 24,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: -1,
              width: 25,
              skin: "ui/B.png",
              height: 60
            },
            compId: 110
          }]
        }, {
          type: "Image",
          props: {
            y: 10.5,
            x: 75,
            width: 24,
            skin: "ui/hud_levelprogress_stage.png",
            name: "D3",
            height: 60,
            centerY: 0
          },
          compId: 25,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: -1,
              width: 25,
              skin: "ui/B.png",
              height: 60
            },
            compId: 111
          }]
        }, {
          type: "Image",
          props: {
            y: 10,
            x: 105,
            width: 24,
            skin: "ui/hud_levelprogress_stage.png",
            name: "D4",
            height: 60,
            centerY: 0
          },
          compId: 26,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: -1,
              width: 25,
              skin: "ui/B.png",
              height: 60
            },
            compId: 112
          }]
        }, {
          type: "Image",
          props: {
            y: 10,
            x: 135,
            width: 24,
            skin: "ui/hud_levelprogress_stage.png",
            name: "D5",
            height: 60,
            centerY: 0
          },
          compId: 29,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: -1,
              width: 25,
              skin: "ui/B.png",
              height: 60
            },
            compId: 113
          }]
        }, {
          type: "Image",
          props: {
            y: 10.5,
            x: 165,
            width: 24,
            skin: "ui/hud_levelprogress_stage.png",
            name: "D6",
            height: 60,
            centerY: 0
          },
          compId: 159,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: -1,
              width: 25,
              skin: "ui/B.png",
              height: 60
            },
            compId: 160
          }]
        }, {
          type: "Image",
          props: {
            y: 20,
            x: 195,
            width: 24,
            skin: "ui/hud_levelprogress_stage.png",
            name: "D7",
            height: 60,
            centerY: 0
          },
          compId: 161,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: -1,
              width: 25,
              skin: "ui/B.png",
              height: 60
            },
            compId: 162
          }]
        }, {
          type: "Image",
          props: {
            x: 232.5,
            width: 100,
            var: "txk",
            skin: "ui/K1.png",
            name: "txk",
            height: 100,
            centerY: 0
          },
          compId: 21,
          child: [{
            type: "Image",
            props: {
              y: 53,
              x: 50,
              width: 61,
              var: "boos",
              skin: "ui/tx.png",
              pivotY: 31,
              pivotX: 31,
              name: "boos",
              height: 61
            },
            compId: 33
          }, {
            type: "Image",
            props: {
              y: 50,
              x: 50,
              width: 72,
              skin: "ui/result_failed.png",
              pivotY: 34,
              pivotX: 36,
              name: "xx",
              height: 68
            },
            compId: 34
          }]
        }]
      }, {
        type: "Image",
        props: {
          x: 0,
          width: 200,
          var: "game_lose",
          skin: "ui/btn_gray.png",
          sizeGrid: "20,20,30,20",
          centerY: 150,
          centerX: 0
        },
        compId: 15,
        child: [{
          type: "Label",
          props: {
            y: 0,
            x: 0,
            text: "失败",
            fontSize: 40,
            font: "SimHei",
            color: "#ffffff",
            centerY: 0,
            centerX: 0,
            bold: !0
          },
          compId: 17
        }]
      }, {
        type: "Image",
        props: {
          y: 478,
          width: 1080,
          var: "Choosethree",
          skin: "ui/K2.png",
          name: "Choosethree",
          height: 282,
          centerX: 0,
          anchorY: .5,
          anchorX: .5
        },
        compId: 43,
        child: [{
          type: "Image",
          props: {
            y: 141,
            x: 540,
            width: 169,
            var: "moneyMax",
            skin: "ui/shop_card_green.png",
            name: "moneyMax",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 44,
          child: [{
            type: "Image",
            props: {
              y: 122,
              x: 85,
              width: 134,
              skin: "ui/Cash_case.png",
              pivotY: 51,
              pivotX: 67,
              height: 102
            },
            compId: 45
          }, {
            type: "Label",
            props: {
              y: 27,
              centerX: 0,
              width: 120,
              text: "Money",
              strokeColor: "#fdfdfd",
              stroke: 0,
              pivotY: 15,
              pivotX: 60,
              height: 30,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 46
          }, {
            type: "Label",
            props: {
              y: 208,
              x: 85,
              width: 45,
              text: "+200",
              strokeColor: "#000000",
              stroke: 2,
              pivotY: 9,
              pivotX: 23,
              height: 18,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 78
          }, {
            type: "Image",
            props: {
              y: 122,
              x: 85,
              width: 87,
              skin: "ui/ad_orange.png",
              pivotY: 30,
              pivotX: 44,
              name: "Ad",
              height: 59
            },
            compId: 97
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: -1164,
            width: 169,
            var: "moneyMin",
            skin: "ui/shop_card_green.png",
            name: "moneyMin",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 68,
          child: [{
            type: "Image",
            props: {
              y: 69,
              x: 46,
              width: 77,
              skin: "ui/Money_icon.png",
              height: 90
            },
            compId: 69
          }, {
            type: "Label",
            props: {
              y: 12,
              centerX: 0,
              text: "Money",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 70
          }, {
            type: "Label",
            props: {
              y: 197,
              x: 67.26904296875,
              text: "+50",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 74
          }, {
            type: "Image",
            props: {
              y: 92,
              x: 41,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 98
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: 340,
            width: 169,
            var: "First",
            skin: "ui/shop_card_green.png",
            pivotY: 114,
            pivotX: 76,
            name: "First",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 50,
          child: [{
            type: "Image",
            props: {
              y: 71,
              x: 17.5,
              width: 134,
              skin: "ui/icon_medkit.png",
              height: 102
            },
            compId: 51
          }, {
            type: "Label",
            props: {
              y: 12,
              centerX: 0,
              text: "Medical Kit",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 52
          }, {
            type: "Label",
            props: {
              y: 197,
              centerX: 0,
              text: "HP+40%",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 77
          }, {
            type: "Image",
            props: {
              y: 92,
              x: 41,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 105
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: 740,
            width: 169,
            var: "pistol",
            skin: "ui/shop_card_blue.png",
            name: "pistol",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 53,
          child: [{
            type: "Image",
            props: {
              y: 75,
              x: 38.5,
              width: 92,
              skin: "ui/icon_pistol.png",
              height: 102
            },
            compId: 54
          }, {
            type: "Label",
            props: {
              y: 11,
              centerX: 0,
              text: "Pistol",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 55
          }, {
            type: "Label",
            props: {
              y: 199,
              centerX: 0,
              text: "Ranged attack",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 79
          }, {
            type: "Image",
            props: {
              y: 92,
              x: 41,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 104
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: -488,
            width: 169,
            var: "rifle",
            skin: "ui/shop_card_blue.png",
            name: "rifle",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 56,
          child: [{
            type: "Image",
            props: {
              y: 71,
              x: 17.5,
              width: 134,
              skin: "ui/icon_MP5.png",
              height: 102
            },
            compId: 57
          }, {
            type: "Label",
            props: {
              y: 12,
              centerX: 0,
              text: "Rifles",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 58
          }, {
            type: "Label",
            props: {
              y: 198,
              centerX: 0,
              text: "chug chug!",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 76
          }, {
            type: "Image",
            props: {
              y: 92.5,
              x: 41.1875,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 92
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: -657,
            width: 169,
            var: "darts",
            skin: "ui/shop_card_blue.png",
            name: "darts",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 59,
          child: [{
            type: "Image",
            props: {
              y: 71,
              x: 17.5,
              width: 134,
              skin: "ui/icon_shuriken.png",
              height: 102
            },
            compId: 60
          }, {
            type: "Label",
            props: {
              y: 11,
              centerX: 0,
              text: "Darts",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 61
          }, {
            type: "Label",
            props: {
              y: 199,
              centerX: 0,
              text: "biu biu...",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 73
          }, {
            type: "Image",
            props: {
              y: 92,
              x: 41,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 103
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: -826,
            width: 169,
            var: "hidden",
            skin: "ui/shop_card_yellow.png",
            name: "hidden",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 62,
          child: [{
            type: "Image",
            props: {
              y: 71,
              x: 37.5,
              width: 94,
              skin: "ui/icon_perk1.png",
              height: 102
            },
            compId: 63
          }, {
            type: "Label",
            props: {
              y: 11,
              centerX: 0,
              text: "Hide",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 64
          }, {
            type: "Label",
            props: {
              y: 196,
              centerX: 0,
              text: "can not see me",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 72
          }, {
            type: "Image",
            props: {
              y: 92,
              x: 41,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 102
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: -995,
            width: 169,
            var: "agile",
            skin: "ui/shop_card_yellow.png",
            name: "agile",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 65,
          child: [{
            type: "Image",
            props: {
              y: 71,
              x: 37.5,
              width: 94,
              skin: "ui/icon_perk2.png",
              height: 102
            },
            compId: 66
          }, {
            type: "Label",
            props: {
              y: 11,
              centerX: 0,
              text: "Agile",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 67
          }, {
            type: "Label",
            props: {
              y: 197,
              centerX: 0,
              text: "Speed+10%",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 71
          }, {
            type: "Image",
            props: {
              y: 92,
              x: 41,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 101
          }]
        }, {
          type: "Image",
          props: {
            y: 141,
            x: -1333,
            width: 169,
            var: "knife",
            skin: "ui/shop_card_blue.png",
            name: "knife",
            height: 228,
            anchorY: .5,
            anchorX: .5
          },
          compId: 84,
          child: [{
            type: "Image",
            props: {
              y: 57.5,
              x: 29.5,
              width: 110,
              skin: "ui/icon_katana_default.png",
              height: 128
            },
            compId: 85
          }, {
            type: "Label",
            props: {
              y: 12,
              centerX: 0,
              text: "Ninja knife",
              strokeColor: "#fdfdfd",
              stroke: 0,
              fontSize: 30,
              font: "SimHei",
              color: "#000000"
            },
            compId: 86
          }, {
            type: "Label",
            props: {
              y: 197,
              centerX: 0,
              text: "very sharp",
              strokeColor: "#000000",
              stroke: 2,
              fontSize: 18,
              font: "SimHei",
              color: "#ffffff",
              bold: !0
            },
            compId: 87
          }, {
            type: "Image",
            props: {
              y: 92,
              x: 41,
              width: 87,
              skin: "ui/ad_orange.png",
              name: "Ad",
              height: 59
            },
            compId: 106
          }]
        }, {
          type: "Image",
          props: {
            width: 209,
            var: "passG",
            skin: "ui/btn_orange.png",
            sizeGrid: "0,40,0,40",
            name: "passG",
            height: 100,
            centerY: 227,
            centerX: 0,
            anchorY: .5,
            anchorX: .5
          },
          compId: 107,
          child: [{
            type: "Label",
            props: {
              y: 30,
              centerX: 0,
              text: "Next level",
              strokeColor: "#000000",
              stroke: 6,
              fontSize: 26,
              font: "SimHei",
              color: "#ffffff"
            },
            compId: 108
          }]
        }, {
          type: "Image",
          props: {
            y: -59,
            width: 138,
            skin: "ui/JL.png",
            height: 51,
            centerX: 0
          },
          compId: 109
        }]
      }, {
        type: "ProgressBar",
        props: {
          y: 157,
          x: -141,
          var: "img_hp",
          skin: "img/hp.png",
          anchorY: .5,
          anchorX: .5
        },
        compId: 18
      }, {
        type: "Image",
        props: {
          y: 226,
          x: 180,
          width: 280,
          var: "bossimg",
          skin: "ui/K2.png",
          sizeGrid: "0,0,0,0",
          name: "bossimg",
          height: 80
        },
        compId: 116,
        child: [{
          type: "ProgressBar",
          props: {
            y: 40,
            x: 140,
            width: 260,
            var: "boss_hp",
            value: 1,
            skin: "img/hp.png",
            sizeGrid: "0,0,0,0",
            height: 50,
            anchorY: .5,
            anchorX: .5
          },
          compId: 134
        }, {
          type: "Image",
          props: {
            y: -9.5,
            x: -40,
            width: 100,
            skin: "ui/K1.png",
            name: "txk",
            height: 100
          },
          compId: 131,
          child: [{
            type: "Image",
            props: {
              y: 53,
              x: 50,
              width: 61,
              var: "bossIcon",
              skin: "ui/tx.png",
              pivotY: 31,
              pivotX: 31,
              height: 61
            },
            compId: 132
          }, {
            type: "Image",
            props: {
              y: 50,
              x: 50,
              width: 72,
              skin: "ui/result_failed.png",
              pivotY: 34,
              pivotX: 36,
              name: "xx",
              height: 68
            },
            compId: 133
          }]
        }]
      }, {
        type: "Image",
        props: {
          y: 241,
          x: -244,
          var: "img_bghp",
          skin: "img/hp.png",
          anchorY: .5,
          anchorX: .5
        },
        compId: 141,
        child: [{
          type: "Image",
          props: {
            y: 0,
            x: 0,
            width: 205,
            var: "imghp",
            skin: "img/hp$bar.png",
            sizeGrid: "0,0,0,205",
            scaleX: 1,
            height: 30
          },
          compId: 142
        }]
      }, {
        type: "Image",
        props: {
          width: 483,
          var: "card",
          skin: "ui/result_card.png",
          scaleY: 1.3,
          scaleX: 1.2,
          height: 271,
          centerY: -92,
          centerX: 0,
          anchorY: .5,
          anchorX: .5
        },
        compId: 147,
        child: [{
          type: "Image",
          props: {
            x: 307,
            width: 140,
            var: "cardIcon",
            skin: "ui/tx.png",
            height: 182,
            centerY: 0
          },
          compId: 148
        }, {
          type: "Label",
          props: {
            y: 39,
            x: 29,
            width: 200,
            var: "cardname",
            valign: "middle",
            text: "坏蛋1号",
            strokeColor: "#000000",
            height: 31,
            fontSize: 18,
            color: "#000000",
            bold: !0,
            align: "left"
          },
          compId: 150
        }, {
          type: "Label",
          props: {
            visible: !0,
            var: "lab",
            text: "Task",
            strokeColor: "#ffffff",
            stroke: 4,
            fontSize: 35,
            font: "SimHei",
            color: "#ff000a",
            centerY: -114,
            centerX: 0,
            bold: !0,
            align: "center"
          },
          compId: 151
        }, {
          type: "Label",
          props: {
            y: 154,
            x: 29,
            width: 228,
            var: "cardexplain",
            valign: "middle",
            text: "专抢儿童零食",
            strokeColor: "#000000",
            height: 33,
            fontSize: 14,
            color: "#000000",
            bold: !0,
            align: "left"
          },
          compId: 152
        }, {
          type: "Label",
          props: {
            y: 111,
            x: 29,
            width: 231,
            var: "cardwork",
            valign: "middle",
            text: "闯过关卡击败他",
            strokeColor: "#000000",
            height: 33,
            fontSize: 18,
            color: "#ff0400",
            bold: !0,
            align: "left"
          },
          compId: 153
        }, {
          type: "Image",
          props: {
            y: 280,
            width: 161,
            var: "cardClose",
            skin: "ui/btn_orange.png",
            sizeGrid: "5,11,7,8",
            height: 81,
            centerX: 0
          },
          compId: 154,
          child: [{
            type: "Image",
            props: {
              skin: "ui/kaisghi.png",
              centerY: 0,
              centerX: 0
            },
            compId: 157
          }]
        }]
      }, {
        type: "Image",
        props: {
          var: "redkuang",
          top: 0,
          skin: "ui/biankuang.png",
          right: 0,
          left: 0,
          bottom: 0,
          alpha: .2
        },
        compId: 158
      }, {
        type: "Box",
        props: {
          width: 640,
          visible: !1,
          var: "game_native",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          right: 0,
          name: "game_native",
          left: 0,
          height: 200,
          bottom: 0
        },
        compId: 163,
        child: [{
          type: "Image",
          props: {
            visible: !1,
            var: "bg",
            top: 0,
            skin: "ui/nativeBox.png",
            right: 0,
            name: "bg",
            left: 0,
            bottom: 0
          },
          compId: 164
        }, {
          type: "Image",
          props: {
            visible: !0,
            var: "ad",
            top: 0,
            right: 0,
            name: "ad",
            left: 0,
            bottom: 0
          },
          compId: 165
        }, {
          type: "Label",
          props: {
            y: 12,
            x: 37,
            width: 499,
            visible: !1,
            text: "label",
            name: "title",
            height: 65,
            fontSize: 50,
            font: "SimHei",
            color: "#ffffff",
            align: "center"
          },
          compId: 166
        }, {
          type: "Label",
          props: {
            y: 258,
            x: 54.5,
            width: 475,
            visible: !1,
            text: "label",
            name: "desc",
            height: 33,
            fontSize: 20,
            font: "SimSun",
            color: "#ffffff",
            align: "center"
          },
          compId: 167
        }, {
          type: "Label",
          props: {
            y: 40,
            x: 456.5,
            width: 73,
            text: "广告",
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 168
        }, {
          type: "Image",
          props: {
            y: 12,
            width: 171,
            visible: !0,
            skin: "ui/ckgg.png",
            name: "adlook",
            height: 82,
            centerX: 0
          },
          compId: 169
        }, {
          type: "Image",
          props: {
            y: 11,
            x: 8,
            width: 58,
            visible: !0,
            skin: "ui/close.png",
            name: "close",
            height: 58
          },
          compId: 170
        }]
      }, {
        type: "Box",
        props: {
          width: 100,
          visible: !1,
          var: "game_Icon",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          right: 10,
          name: "game_Icon",
          height: 100,
          bottom: 400
        },
        compId: 171,
        child: [{
          type: "Image",
          props: {
            visible: !1,
            top: 0,
            skin: "ui/nativeBox.png",
            right: 0,
            name: "bg",
            left: 0,
            bottom: 0
          },
          compId: 172
        }, {
          type: "Image",
          props: {
            visible: !0,
            top: 0,
            right: 0,
            name: "ad",
            left: 0,
            bottom: 0
          },
          compId: 173
        }, {
          type: "Image",
          props: {
            y: 0,
            x: 0,
            width: 40,
            visible: !0,
            skin: "ui/close.png",
            scaleY: .6,
            scaleX: .6,
            name: "close",
            height: 40
          },
          compId: 174
        }, {
          type: "Label",
          props: {
            y: 10,
            x: 84,
            width: 499,
            visible: !1,
            text: "label",
            scaleY: .3,
            scaleX: .3,
            name: "title",
            height: 65,
            fontSize: 50,
            font: "SimHei",
            color: "#ffffff",
            align: "center"
          },
          compId: 175
        }, {
          type: "Label",
          props: {
            y: 258,
            x: 54.5,
            width: 475,
            visible: !1,
            text: "label",
            name: "desc",
            height: 33,
            fontSize: 20,
            font: "SimSun",
            color: "#ffffff",
            align: "center"
          },
          compId: 176
        }, {
          type: "Label",
          props: {
            width: 73,
            top: 0,
            text: "广告",
            scaleY: .5,
            scaleX: .5,
            right: 0,
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 177
        }, {
          type: "Image",
          props: {
            width: 200,
            visible: !1,
            skin: "ui/btn_gray.png",
            sizeGrid: "20,20,30,20",
            name: "adlook",
            height: 80,
            centerY: 483,
            centerX: 0
          },
          compId: 178,
          child: [{
            type: "Image",
            props: {
              skin: "ui/ckgg.png",
              centerY: 0,
              centerX: 0
            },
            compId: 179
          }]
        }]
      }],
      loadList: ["ui/ui_bar_white.png", "ui/ui_bar_green.png", "ui/btn_green.png", "ui/ui_number_whire.png", "ui/btn_gray.png", "ui/btn_orange.png", "ui/K2.png", "ui/hud_levelprogress_stage.png", "ui/B.png", "ui/hud_levelprogress_shopstage.png", "ui/K1.png", "ui/tx.png", "ui/result_failed.png", "ui/shop_card_green.png", "ui/Cash_case.png", "ui/ad_orange.png", "ui/Money_icon.png", "ui/icon_medkit.png", "ui/shop_card_blue.png", "ui/icon_pistol.png", "ui/icon_MP5.png", "ui/icon_shuriken.png", "ui/shop_card_yellow.png", "ui/icon_perk1.png", "ui/icon_perk2.png", "ui/icon_katana_default.png", "ui/JL.png", "img/hp.png", "img/hp$bar.png", "ui/result_card.png", "ui/kaisghi.png", "ui/biankuang.png", "ui/nativeBox.png", "ui/ckgg.png", "ui/close.png"],
      loadList3D: []
    }, e.GameViewUI = n, i("ui.GameViewUI", n);
    class a extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(a.uiView)
      }
    }
    a.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/LoadView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          top: 0,
          skin: "ui/Loader.png",
          right: 0,
          left: 0,
          bottom: 0,
          bgColor: "#ffffff"
        },
        compId: 4
      }, {
        type: "Image",
        props: {
          skin: "",
          scaleY: .5,
          scaleX: .5,
          centerY: -347,
          centerX: 0
        },
        compId: 11
      }, {
        type: "Label",
        props: {
          var: "load_txt",
          text: "资源加载中,请稍后！",
          fontSize: 30,
          color: "#000000",
          centerY: 428,
          centerX: 0,
          bold: !0,
          anchorY: .5,
          anchorX: .5
        },
        compId: 9
      }, {
        type: "Image",
        props: {
          y: 900,
          width: 410,
          skin: "img/hp.png",
          height: 58,
          centerX: 0
        },
        compId: 13,
        child: [{
          type: "Image",
          props: {
            y: 0,
            x: 0,
            width: 19,
            var: "loadingBar",
            skin: "img/hparm.png",
            sizeGrid: "0,0,0,205",
            scaleX: 2,
            height: 58
          },
          compId: 14
        }, {
          type: "FontClip",
          props: {
            width: 80,
            var: "loadingBarTxt",
            value: "0",
            spaceX: -3,
            skin: "ui/ui_number_black_and_white.png",
            sheet: "0123456789",
            scaleY: 1,
            scaleX: 1,
            centerY: 0,
            centerX: -40,
            align: "right"
          },
          compId: 15,
          child: [{
            type: "Image",
            props: {
              skin: "ui/bfh.png",
              scaleY: 1,
              scaleX: 1,
              right: -40,
              centerY: 0
            },
            compId: 16
          }]
        }]
      }],
      loadList: ["ui/Loader.png", "ui/log.png", "img/hp.png", "img/hparm.png", "ui/ui_number_black_and_white.png", "ui/bfh.png"],
      loadList3D: []
    }, e.LoadViewUI = a, i("ui.LoadViewUI", a);
    class s extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(s.uiView)
      }
    }
    s.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/LoseView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          y: 0,
          x: 0,
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 9
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "lose_again",
          skin: "ui/btn_blue.png",
          sizeGrid: "20,20,30,20",
          height: 100,
          centerY: -108,
          centerX: 0
        },
        compId: 4,
        child: [{
          type: "Image",
          props: {
            y: 0,
            x: 0,
            skin: "ui/txt_again.png",
            centerY: 0,
            centerX: 0
          },
          compId: 5
        }]
      }, {
        type: "Image",
        props: {
          width: 558,
          skin: "ui/qd-d1.png",
          height: 87,
          centerY: -232,
          centerX: 0
        },
        compId: 10,
        child: [{
          type: "Label",
          props: {
            visible: !0,
            var: "lab",
            text: "Go to the store to buy gear",
            strokeColor: "#ffffff",
            stroke: 4,
            fontSize: 35,
            font: "SimHei",
            color: "#000000",
            centerY: 0,
            centerX: 0,
            bold: !0,
            align: "center"
          },
          compId: 11
        }]
      }, {
        type: "Box",
        props: {
          width: 600,
          visible: !1,
          var: "lose_native",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          name: "lose_native",
          height: 379,
          centerY: 250,
          centerX: 0
        },
        compId: 12,
        child: [{
          type: "Image",
          props: {
            visible: !1,
            var: "bg",
            top: 0,
            skin: "ui/nativeBox.png",
            right: 0,
            name: "bg",
            left: 0,
            bottom: 0
          },
          compId: 13
        }, {
          type: "Image",
          props: {
            y: 29,
            x: 27,
            width: 542,
            visible: !0,
            var: "ad",
            name: "ad",
            height: 334
          },
          compId: 14
        }, {
          type: "Label",
          props: {
            y: 12,
            x: 37,
            width: 499,
            visible: !1,
            text: "label",
            name: "title",
            height: 65,
            fontSize: 50,
            font: "SimHei",
            color: "#ffffff",
            align: "center"
          },
          compId: 15
        }, {
          type: "Label",
          props: {
            y: 258,
            x: 54.5,
            width: 475,
            visible: !1,
            text: "label",
            name: "desc",
            height: 33,
            fontSize: 20,
            font: "SimSun",
            color: "#ffffff",
            align: "center"
          },
          compId: 16
        }, {
          type: "Label",
          props: {
            y: 40,
            x: 456.5,
            width: 73,
            text: "广告",
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 17
        }, {
          type: "Image",
          props: {
            y: -62,
            x: 206.5,
            width: 171,
            visible: !0,
            skin: "ui/ckgg.png",
            name: "adlook",
            height: 82
          },
          compId: 18
        }, {
          type: "Image",
          props: {
            y: 46,
            x: 44,
            width: 58,
            visible: !0,
            skin: "ui/close.png",
            name: "close",
            height: 58
          },
          compId: 19
        }]
      }, {
        type: "Box",
        props: {
          width: 600,
          visible: !1,
          var: "loses_native",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          name: "loses_native",
          height: 428,
          centerY: 0,
          centerX: 0
        },
        compId: 20,
        child: [{
          type: "Image",
          props: {
            y: -468,
            x: -248,
            width: 1e3,
            visible: !0,
            skin: "ui/box_price.png",
            height: 1428
          },
          compId: 42
        }, {
          type: "Image",
          props: {
            y: -39,
            x: -19,
            width: 638,
            visible: !0,
            skin: "ui/nativeBox.png",
            name: "bg",
            height: 482
          },
          compId: 21
        }, {
          type: "Image",
          props: {
            y: 44,
            x: 27,
            width: 546,
            visible: !0,
            name: "ad",
            height: 339
          },
          compId: 22
        }, {
          type: "Label",
          props: {
            y: 395,
            x: 26,
            width: 544,
            visible: !1,
            valign: "middle",
            text: "惊喜",
            name: "desc",
            height: 33,
            fontSize: 30,
            font: "SimSun",
            color: "#000000",
            bold: !0,
            align: "center"
          },
          compId: 24
        }, {
          type: "Label",
          props: {
            y: -32,
            x: 101,
            width: 408,
            visible: !0,
            valign: "middle",
            text: "惊喜",
            name: "title",
            height: 65,
            fontSize: 50,
            font: "SimHei",
            color: "#000000",
            align: "center"
          },
          compId: 25
        }, {
          type: "Label",
          props: {
            y: 75,
            x: 469,
            width: 73,
            text: "广告",
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 26
        }, {
          type: "Image",
          props: {
            y: 457,
            width: 171,
            visible: !0,
            skin: "ui/ckgg.png",
            name: "adlook",
            height: 82,
            centerX: -2
          },
          compId: 27
        }, {
          type: "Image",
          props: {
            y: 78.5,
            x: 44,
            width: 30,
            visible: !0,
            skin: "ui/close.png",
            name: "close",
            height: 30
          },
          compId: 23
        }]
      }, {
        type: "Image",
        props: {
          skin: "ui/loser.png",
          scaleY: 1.5,
          scaleX: 1.5,
          centerY: -356,
          centerX: 0
        },
        compId: 28
      }],
      loadList: ["ui/mask.png", "ui/btn_blue.png", "ui/txt_again.png", "ui/qd-d1.png", "ui/btn_green.png", "ui/nativeBox.png", "ui/ckgg.png", "ui/close.png", "ui/box_price.png", "ui/loser.png"],
      loadList3D: []
    }, e.LoseViewUI = s, i("ui.LoseViewUI", s);
    class r extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(r.uiView)
      }
    }
    r.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/MainView.ts",
        positionVariance_0: 100,
        maxPartices: 100,
        height: 1138
      },
      compId: 1,
      child: [{
        type: "Box",
        props: {
          y: 0,
          x: 0,
          visible: !0,
          var: "main_start",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 188,
        child: [{
          type: "Image",
          props: {
            skin: "",
            scaleY: .5,
            scaleX: .5,
            centerY: -333,
            centerX: 0
          },
          compId: 332
        }, {
          type: "Image",
          props: {
            width: 388,
            skin: "ui/startgame.png",
            scaleY: .8,
            scaleX: .8,
            height: 76,
            centerY: 293,
            centerX: 6
          },
          compId: 274
        }]
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "main_signin",
          skin: "ui/btn_blue.png",
          sizeGrid: "20,20,30,20",
          right: -100,
          height: 100,
          centerY: -50
        },
        compId: 162,
        child: [{
          type: "Image",
          props: {
            skin: "ui/signin.png",
            left: 20,
            centerY: -5
          },
          compId: 275
        }]
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "main_skin",
          skin: "ui/btn_orange.png",
          sizeGrid: "20,20,30,20",
          right: -100,
          height: 100,
          centerY: 100
        },
        compId: 163,
        child: [{
          type: "Image",
          props: {
            skin: "ui/skin.png",
            left: 20,
            centerY: 0
          },
          compId: 273
        }]
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "main_exchange",
          skin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          right: -100,
          height: 100,
          centerY: -200
        },
        compId: 277,
        child: [{
          type: "Image",
          props: {
            skin: "ui/dhlb.png",
            scaleY: .3,
            scaleX: .3,
            left: 15,
            centerY: -2
          },
          compId: 278
        }]
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "img_wuqi",
          skin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          scaleY: .6,
          scaleX: .6,
          right: 520,
          height: 198,
          centerY: -89
        },
        compId: 304,
        child: [{
          type: "Image",
          props: {
            width: 251,
            var: "img_rotaion",
            skin: "ui/sl-jl3.png",
            height: 251,
            centerY: -1,
            centerX: -1,
            anchorY: .5,
            anchorX: .5
          },
          compId: 310
        }, {
          type: "Image",
          props: {
            width: 151,
            var: "img_text",
            skin: "ui/xianshi.png",
            rotation: 30,
            height: 65,
            centerY: -82,
            centerX: 80,
            anchorY: .5,
            anchorX: .5
          },
          compId: 309
        }, {
          type: "Image",
          props: {
            y: 188,
            x: 387,
            width: 177,
            skin: "ui/icon_shuriken.png",
            height: 127,
            centerY: 0,
            centerX: 0
          },
          compId: 308
        }, {
          type: "Image",
          props: {
            width: 76,
            skin: "ui/ad_orange.png",
            height: 50,
            centerY: 64,
            centerX: 51
          },
          compId: 305
        }]
      }, {
        type: "Image",
        props: {
          y: 839,
          x: -10,
          var: "main_deal",
          skin: "ui/ysxy.png",
          scaleY: .7,
          scaleX: .7,
          left: -10,
          centerY: 350
        },
        compId: 333
      }, {
        type: "Image",
        props: {
          visible: !1,
          var: "exchange",
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 288,
        child: [{
          type: "Image",
          props: {
            width: 400,
            var: "exchange_box",
            skin: "ui/bailv.png",
            sizeGrid: "45,45,90,45",
            height: 300,
            centerY: 100,
            centerX: 0
          },
          compId: 289,
          child: [{
            type: "Image",
            props: {
              skin: "ui/huangdaizi.png",
              scaleY: .5,
              scaleX: .5,
              centerX: 0
            },
            compId: 290,
            child: [{
              type: "Image",
              props: {
                skin: "ui/dhlb.png",
                centerX: 0,
                bottom: 40
              },
              compId: 291
            }]
          }, {
            type: "TextInput",
            props: {
              width: 400,
              var: "exchange_input",
              valign: "middle",
              type: "number",
              restrict: "0123456789",
              promptColor: "#c8c8c8",
              prompt: "礼品码",
              maxChars: 10,
              height: 100,
              fontSize: 40,
              font: "SimHei",
              color: "#000000",
              centerY: 0,
              centerX: 0,
              bold: !0,
              bgColor: "#808080",
              align: "center"
            },
            compId: 292
          }, {
            type: "Label",
            props: {
              x: 118,
              width: 400,
              var: "exchange_btn",
              valign: "middle",
              text: "领取礼品",
              strokeColor: "#ffffff",
              stroke: 4,
              height: 90,
              fontSize: 40,
              font: "SimHei",
              color: "#ff0400",
              centerX: 0,
              bottom: 0,
              bold: !0,
              align: "center"
            },
            compId: 294
          }, {
            type: "Image",
            props: {
              width: 60,
              var: "exchange_close",
              top: 5,
              skin: "ui/close.png",
              right: 0,
              height: 60
            },
            compId: 295
          }]
        }, {
          type: "Image",
          props: {
            width: 400,
            visible: !1,
            var: "exchange_show",
            skin: "ui/btn_blue.png",
            sizeGrid: "20,20,30,20",
            height: 300,
            centerY: 100,
            centerX: 0
          },
          compId: 296,
          child: [{
            type: "Image",
            props: {
              width: 200,
              var: "exchange_show_get",
              skin: "ui/btn_green.png",
              sizeGrid: "20,20,30,20",
              centerX: 0,
              bottom: -120
            },
            compId: 297,
            child: [{
              type: "Label",
              props: {
                x: 118,
                valign: "middle",
                text: "领 取",
                strokeColor: "#ffffff",
                stroke: 4,
                fontSize: 40,
                font: "SimHei",
                color: "#000000",
                centerY: 0,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 298
            }]
          }, {
            type: "Image",
            props: {
              var: "exchange_show_light",
              skin: "ui/sl-jl3.png",
              centerY: 0,
              centerX: 0
            },
            compId: 299
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              var: "exchange_show_item",
              skin: "ui/ui_coin.png",
              centerY: 0,
              centerX: 0
            },
            compId: 300
          }, {
            type: "Image",
            props: {
              x: 0,
              top: -100,
              skin: "ui/txt_award.png",
              centerX: 0
            },
            compId: 301
          }]
        }]
      }, {
        type: "Image",
        props: {
          y: 700,
          width: 300,
          var: "guideHandMain",
          skin: "bg/qq.png",
          height: 150,
          centerX: 0
        },
        compId: 302
      }, {
        type: "Image",
        props: {
          y: 700,
          width: 100,
          var: "guideHand",
          skin: "bg/hand.png",
          pivotX: 40,
          height: 150,
          centerX: 0
        },
        compId: 303
      }, {
        type: "Image",
        props: {
          width: 413,
          skin: "ui/qd-d1.png",
          height: 87,
          centerY: -148,
          centerX: 0
        },
        compId: 313,
        child: [{
          type: "Label",
          props: {
            visible: !0,
            var: "lab",
            text: "Swipe the screen",
            strokeColor: "#ffffff",
            stroke: 4,
            fontSize: 35,
            font: "SimHei",
            color: "#000000",
            centerY: 0,
            centerX: 0,
            bold: !0,
            align: "center"
          },
          compId: 312
        }]
      }, {
        type: "Image",
        props: {
          y: 548,
          x: -8,
          visible: !1,
          var: "oppo_mg_btn",
          skin: "ui/gdyx.png",
          scaleY: .8,
          scaleX: .8,
          left: -8,
          centerY: 100
        },
        compId: 279
      }, {
        type: "Image",
        props: {
          visible: !1,
          var: "oppo_mg_box",
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 1,
          bottom: 0
        },
        compId: 280,
        child: [{
          type: "Image",
          props: {
            width: 448,
            skin: "ui/gdhwyx.png",
            sizeGrid: "60,0,20,0",
            left: -450,
            height: 862,
            centerY: 100
          },
          compId: 281,
          child: [{
            type: "Image",
            props: {
              width: 100,
              top: 60,
              skin: "ui/moreGameIcon/game9.png",
              right: 170,
              height: 100
            },
            compId: 282,
            child: [{
              type: "Label",
              props: {
                width: 107,
                valign: "middle",
                text: "画线营救",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 320
            }]
          }, {
            type: "Image",
            props: {
              y: 220,
              x: 134,
              width: 100,
              top: 220,
              skin: "ui/moreGameIcon/qsz.png",
              right: 170,
              height: 100
            },
            compId: 284,
            child: [{
              type: "Label",
              props: {
                width: 110,
                valign: "middle",
                text: "切沙子贼6",
                strokeColor: "#000000",
                stroke: 2,
                height: 22,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 321
            }]
          }, {
            type: "Image",
            props: {
              y: 380,
              x: 178,
              width: 100,
              top: 380,
              skin: "ui/moreGameIcon/game2.png",
              right: 170,
              height: 100
            },
            compId: 286,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "削木头贼6",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 322
            }]
          }, {
            type: "Image",
            props: {
              y: 532,
              x: 178,
              width: 100,
              top: 532,
              skin: "ui/moreGameIcon/game8.png",
              right: 170,
              height: 100
            },
            compId: 315,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "挺住香肠君",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 323
            }]
          }, {
            type: "Image",
            props: {
              width: 100,
              top: 683,
              skin: "ui/moreGameIcon/xjds.png",
              right: 170,
              height: 100
            },
            compId: 283,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "修脚大师",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 324
            }]
          }, {
            type: "Image",
            props: {
              width: 100,
              top: 60,
              skin: "ui/moreGameIcon/sgss.png",
              right: 10,
              height: 100
            },
            compId: 285,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "水果手术",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 325
            }]
          }, {
            type: "Image",
            props: {
              width: 100,
              top: 220,
              skin: "ui/moreGameIcon/xqq.png",
              right: 10,
              height: 100
            },
            compId: 287,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "小拳拳锤你",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 326
            }]
          }, {
            type: "Image",
            props: {
              width: 100,
              top: 380,
              skin: "ui/moreGameIcon/tkyq.png",
              right: 10,
              height: 100
            },
            compId: 316,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "踢开一切",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 327
            }]
          }, {
            type: "Image",
            props: {
              width: 100,
              top: 532,
              skin: "ui/moreGameIcon/game6.png",
              right: 10,
              height: 100
            },
            compId: 328,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "吃货也疯狂",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 329
            }]
          }, {
            type: "Image",
            props: {
              width: 100,
              top: 683,
              skin: "ui/moreGameIcon/game4.png",
              right: 10,
              height: 100
            },
            compId: 330,
            child: [{
              type: "Label",
              props: {
                y: 0,
                x: 0,
                width: 107,
                valign: "middle",
                text: "削铁如泥",
                strokeColor: "#000000",
                stroke: 2,
                height: 29,
                fontSize: 20,
                font: "SimHei",
                color: "#ffffff",
                centerY: 69,
                centerX: 0,
                bold: !0,
                align: "center"
              },
              compId: 331
            }]
          }]
        }]
      }],
      loadList: ["ui/log.png", "ui/startgame.png", "ui/btn_blue.png", "ui/signin.png", "ui/btn_orange.png", "ui/skin.png", "ui/btn_green.png", "ui/dhlb.png", "ui/sl-jl3.png", "ui/xianshi.png", "ui/icon_shuriken.png", "ui/ad_orange.png", "ui/ysxy.png", "ui/mask.png", "ui/bailv.png", "ui/huangdaizi.png", "ui/close.png", "ui/ui_coin.png", "ui/txt_award.png", "bg/qq.png", "bg/hand.png", "ui/qd-d1.png", "ui/gdyx.png", "ui/gdhwyx.png", "ui/moreGameIcon/game9.png", "ui/moreGameIcon/qsz.png", "ui/moreGameIcon/game2.png", "ui/moreGameIcon/game8.png", "ui/moreGameIcon/xjds.png", "ui/moreGameIcon/sgss.png", "ui/moreGameIcon/xqq.png", "ui/moreGameIcon/tkyq.png", "ui/moreGameIcon/game6.png", "ui/moreGameIcon/game4.png"],
      loadList3D: []
    }, e.MainViewUI = r, i("ui.MainViewUI", r);
    class h extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(h.uiView)
      }
    }
    h.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/MoneyView.ts",
        mouseThrough: !0,
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          width: 200,
          var: "box_price",
          top: 100,
          skin: "ui/box_price.png",
          sizeGrid: "20,20,20,20",
          right: -15,
          height: 50
        },
        compId: 3,
        child: [{
          type: "Image",
          props: {
            skin: "ui/Money_icon.png",
            scaleY: .5,
            scaleX: .5,
            centerY: 0
          },
          compId: 4
        }, {
          type: "FontClip",
          props: {
            width: 125,
            var: "money_num",
            value: "99999",
            spaceX: -3,
            skin: "ui/ui_number_black_and_white.png",
            sheet: "0123456789",
            scaleY: 1,
            scaleX: 1,
            pivotY: 16,
            pivotX: 63,
            height: 32,
            centerY: 0,
            centerX: 11
          },
          compId: 5
        }]
      }, {
        type: "Image",
        props: {
          var: "money_sound",
          top: 100,
          skin: "ui/ui_sound_open.png",
          left: 50
        },
        compId: 6
      }, {
        type: "Image",
        props: {
          visible: !1,
          var: "money_shake",
          top: 90,
          skin: "ui/ui_shake_open.png",
          left: 150
        },
        compId: 7
      }, {
        type: "Image",
        props: {
          y: 466,
          x: -758,
          visible: !0,
          var: "Hand",
          skin: "bg/UiHand.png"
        },
        compId: 8
      }],
      animations: [{
        nodes: [{
          target: 8,
          keyframes: {
            skin: [{
              value: "bg/UiHand.png",
              tweenMethod: "linearNone",
              tween: !1,
              target: 8,
              key: "skin",
              index: 0
            }, {
              value: "bg/shou.png",
              tweenMethod: "linearNone",
              tween: !1,
              target: 8,
              key: "skin",
              index: 5
            }, {
              value: "bg/UiHand.png",
              tweenMethod: "linearNone",
              tween: !1,
              target: 8,
              key: "skin",
              index: 10
            }]
          }
        }],
        name: "ani1",
        id: 1,
        frameRate: 24,
        action: 2
      }],
      loadList: ["ui/box_price.png", "ui/Money_icon.png", "ui/ui_number_black_and_white.png", "ui/ui_sound_open.png", "ui/ui_shake_open.png", "bg/UiHand.png", "bg/shou.png"],
      loadList3D: []
    }, e.MoneyViewUI = h, i("ui.MoneyViewUI", h);
    class l extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(l.uiView)
      }
    }
    l.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/NativeView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 3
      }, {
        type: "Image",
        props: {
          skin: "ui/nativeBox.png",
          scaleY: .5,
          scaleX: .5,
          centerY: 80,
          centerX: 0
        },
        compId: 4,
        child: [{
          type: "Image",
          props: {
            width: 800,
            var: "native_img",
            skin: "ui/mask.png",
            height: 400,
            centerY: 20,
            centerX: 0
          },
          compId: 7,
          child: [{
            type: "Image",
            props: {
              skin: "ui/adTag.png",
              centerY: -175,
              centerX: 350
            },
            compId: 9
          }]
        }, {
          type: "Label",
          props: {
            width: 600,
            var: "native_title",
            valign: "middle",
            top: 20,
            text: "TITLE",
            fontSize: 80,
            font: "SimHei",
            color: "#ffffff",
            centerX: 0,
            bold: !0,
            align: "center"
          },
          compId: 5
        }, {
          type: "Image",
          props: {
            width: 80,
            var: "native_close",
            skin: "ui/close.png",
            height: 80,
            centerY: -140,
            centerX: -360
          },
          compId: 6
        }, {
          type: "Label",
          props: {
            x: 0,
            width: 850,
            var: "native_desc",
            valign: "middle",
            text: "TITLE",
            stroke: 8,
            height: 130,
            fontSize: 50,
            font: "SimHei",
            color: "#ffffff",
            centerX: 0,
            bottom: 0,
            bold: !0,
            align: "center"
          },
          compId: 8
        }]
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "native_btn",
          skin: "ui/btn_orange.png",
          sizeGrid: "20,20,30,20",
          height: 80,
          centerY: 320,
          centerX: 0
        },
        compId: 10,
        child: [{
          type: "Label",
          props: {
            y: 0,
            x: 0,
            width: 200,
            var: "native_btn_txt",
            valign: "middle",
            text: "查看广告",
            strokeColor: "#ffffff",
            height: 80,
            fontSize: 40,
            font: "SimHei",
            color: "#ffffff",
            centerX: 0,
            bottom: 0,
            bold: !0,
            align: "center"
          },
          compId: 12
        }]
      }],
      loadList: ["ui/mask.png", "ui/nativeBox.png", "ui/adTag.png", "ui/close.png", "ui/btn_orange.png"],
      loadList3D: []
    }, e.NativeViewUI = l, i("ui.NativeViewUI", l);
    class d extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(d.uiView)
      }
    }
    d.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/PushView.ts",
        height: 1301
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 27
      }, {
        type: "Image",
        props: {
          width: 500,
          var: "push_box",
          skin: "ui/btn_blue.png",
          sizeGrid: "20,20,30,20",
          height: 500,
          centerY: -100,
          centerX: -10,
          anchorY: .5,
          anchorX: .5
        },
        compId: 5,
        child: [{
          type: "Image",
          props: {
            top: -60,
            skin: "ui/txt_award.png",
            centerX: 0
          },
          compId: 28
        }, {
          type: "Image",
          props: {
            width: 277,
            var: "push_item",
            skin: "img/PF01.png",
            height: 327,
            centerY: 0,
            centerX: 0,
            anchorY: .5,
            anchorX: .5
          },
          compId: 9
        }, {
          type: "Label",
          props: {
            x: 160,
            var: "push_desc",
            text: "Partner of justice",
            strokeColor: "#ffffff",
            stroke: 2,
            fontSize: 30,
            font: "Arial",
            centerX: 0,
            bottom: 40,
            bold: !0,
            align: "center"
          },
          compId: 29
        }, {
          type: "Image",
          props: {
            width: 70,
            var: "push_close",
            top: 0,
            skin: "ui/close.png",
            right: 0,
            height: 70
          },
          compId: 6
        }]
      }, {
        type: "Image",
        props: {
          width: 220,
          var: "push_ad",
          skin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          height: 100,
          centerY: 200,
          centerX: 0
        },
        compId: 32,
        child: [{
          type: "Image",
          props: {
            skin: "ui/ad_green.png",
            left: 20,
            centerY: 0
          },
          compId: 33
        }, {
          type: "Image",
          props: {
            y: 0,
            skin: "ui/txt_try.png",
            left: 110,
            centerY: 0
          },
          compId: 34
        }]
      }, {
        type: "Box",
        props: {
          width: 600,
          visible: !1,
          var: "loses_native",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          name: "loses_native",
          height: 428,
          centerY: 417,
          centerX: 0
        },
        compId: 35,
        child: [{
          type: "Image",
          props: {
            y: -39,
            x: -19,
            width: 638,
            visible: !0,
            skin: "ui/nativeBox.png",
            name: "bg",
            height: 482
          },
          compId: 36
        }, {
          type: "Image",
          props: {
            y: 44,
            x: 27,
            width: 546,
            visible: !0,
            name: "ad",
            height: 339
          },
          compId: 37
        }, {
          type: "Label",
          props: {
            y: 45,
            x: 29,
            width: 544,
            visible: !1,
            valign: "middle",
            text: "惊喜",
            name: "desc",
            height: 33,
            fontSize: 30,
            font: "SimSun",
            color: "#000000",
            bold: !0,
            align: "center"
          },
          compId: 38
        }, {
          type: "Label",
          props: {
            y: -32,
            x: 101,
            width: 408,
            visible: !0,
            valign: "middle",
            text: "惊喜",
            name: "title",
            height: 65,
            fontSize: 50,
            font: "SimHei",
            color: "#000000",
            align: "center"
          },
          compId: 39
        }, {
          type: "Label",
          props: {
            y: 75,
            x: 469,
            width: 73,
            text: "广告",
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 40
        }, {
          type: "Image",
          props: {
            y: -49,
            width: 171,
            visible: !0,
            skin: "ui/ckgg.png",
            name: "adlook",
            height: 82,
            centerX: -9
          },
          compId: 41
        }, {
          type: "Image",
          props: {
            y: 45,
            x: 27,
            width: 60,
            visible: !0,
            skin: "ui/close.png",
            name: "close",
            height: 60
          },
          compId: 42
        }]
      }, {
        type: "Box",
        props: {
          y: 355,
          x: 20,
          width: 600,
          visible: !1,
          var: "push_native",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          name: "push_native",
          height: 428,
          centerY: 0,
          centerX: 0
        },
        compId: 56,
        child: [{
          type: "Image",
          props: {
            y: -440,
            x: -248,
            width: 1e3,
            visible: !0,
            skin: "ui/box_price.png",
            height: 1400
          },
          compId: 65
        }, {
          type: "Image",
          props: {
            y: -39,
            x: -19,
            width: 638,
            visible: !0,
            skin: "ui/nativeBox.png",
            name: "bg",
            height: 482
          },
          compId: 57
        }, {
          type: "Image",
          props: {
            y: 44,
            x: 27,
            width: 546,
            visible: !0,
            name: "ad",
            height: 339
          },
          compId: 58
        }, {
          type: "Label",
          props: {
            y: 395,
            x: 26,
            width: 544,
            visible: !1,
            valign: "middle",
            text: "惊喜",
            name: "desc",
            height: 33,
            fontSize: 20,
            font: "SimSun",
            color: "#000000",
            bold: !0,
            align: "center"
          },
          compId: 59
        }, {
          type: "Label",
          props: {
            y: -32,
            x: 104,
            width: 396,
            visible: !0,
            valign: "middle",
            text: "惊喜",
            name: "title",
            height: 65,
            fontSize: 40,
            font: "SimHei",
            color: "#000000",
            align: "center"
          },
          compId: 60
        }, {
          type: "Label",
          props: {
            y: 75,
            x: 469,
            width: 73,
            text: "广告",
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 61
        }, {
          type: "Image",
          props: {
            y: 457,
            width: 171,
            visible: !0,
            skin: "ui/ckgg.png",
            name: "adlook",
            height: 82,
            centerX: -2
          },
          compId: 62
        }, {
          type: "Image",
          props: {
            y: 72,
            x: 42,
            width: 30,
            visible: !0,
            skin: "ui/close.png",
            name: "close",
            height: 30
          },
          compId: 63
        }]
      }],
      loadList: ["ui/mask.png", "ui/btn_blue.png", "ui/txt_award.png", "img/PF01.png", "ui/close.png", "ui/btn_green.png", "ui/ad_green.png", "ui/txt_try.png", "ui/nativeBox.png", "ui/ckgg.png", "ui/box_price.png"],
      loadList3D: []
    }, e.PushViewUI = d, i("ui.PushViewUI", d);
    class p extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(p.uiView)
      }
    }
    p.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/ReviveView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          y: 0,
          x: 0,
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 12
      }, {
        type: "Image",
        props: {
          width: 300,
          var: "revive_ad",
          skin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          height: 100,
          centerY: 0,
          centerX: 0
        },
        compId: 4,
        child: [{
          type: "Image",
          props: {
            skin: "ui/ad_green.png",
            left: 20,
            centerY: 0
          },
          compId: 6
        }, {
          type: "Image",
          props: {
            y: 29,
            x: 120,
            skin: "ui/txt_relive.png",
            scaleY: 1.5,
            scaleX: 1.5,
            left: 100,
            centerY: 0
          },
          compId: 7
        }]
      }, {
        type: "Image",
        props: {
          width: 160,
          var: "revive_skip",
          skin: "ui/btn_gray.png",
          sizeGrid: "20,20,30,20",
          height: 90,
          centerY: 120,
          centerX: 0
        },
        compId: 8,
        child: [{
          type: "Image",
          props: {
            skin: "ui/txt_skip.png",
            centerY: 0,
            centerX: 0
          },
          compId: 9
        }]
      }, {
        type: "Box",
        props: {
          width: 600,
          var: "revive_native",
          styleSkin: "ui/btn_blue.png",
          sizeGrid: "20,20,30,20",
          height: 300,
          centerY: 320,
          centerX: 0
        },
        compId: 10
      }],
      loadList: ["ui/mask.png", "ui/btn_green.png", "ui/ad_green.png", "ui/txt_relive.png", "ui/btn_gray.png", "ui/txt_skip.png", "ui/btn_blue.png"],
      loadList3D: []
    }, e.ReviveViewUI = p, i("ui.ReviveViewUI", p);
    class c extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(c.uiView)
      }
    }
    c.uiView = {
      type: "View",
      props: {
        y: 0,
        x: 0
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          y: 0,
          x: 0,
          width: 207,
          visible: !0,
          var: "sp",
          skin: "bg/rockerBg.png",
          height: 207,
          anchorY: .5,
          anchorX: .5
        },
        compId: 3
      }, {
        type: "Box",
        props: {
          width: 304,
          visible: !1,
          var: "dir",
          height: 304,
          anchorY: .5,
          anchorX: .5
        },
        compId: 7
      }, {
        type: "Image",
        props: {
          y: 0,
          x: 0,
          width: 70,
          visible: !0,
          var: "sp0",
          skin: "bg/rockerBall.png",
          rotation: 0,
          height: 70,
          anchorY: .5,
          anchorX: .5
        },
        compId: 4
      }],
      loadList: ["bg/rockerBg.png", "bg/rockerBall.png"],
      loadList3D: []
    }, e.RockerViewUI = c, i("ui.RockerViewUI", c);
    class g extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(g.uiView)
      }
    }
    g.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/ShareView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 3
      }, {
        type: "Image",
        props: {
          width: 400,
          skin: "ui/box_red.png",
          sizeGrid: "25,25,40,25",
          height: 500,
          centerY: 100,
          centerX: 0
        },
        compId: 4,
        child: [{
          type: "Image",
          props: {
            var: "share_img",
            top: 15,
            skin: "ui/sharePng.jpg",
            centerX: 0
          },
          compId: 5,
          child: [{
            type: "Image",
            props: {
              skin: "ui/share_play.png",
              scaleY: .8,
              scaleX: .8,
              centerY: 0,
              centerX: 0
            },
            compId: 6
          }]
        }, {
          type: "Image",
          props: {
            var: "share_btn",
            skin: "ui/btn_share.png",
            scaleY: .5,
            scaleX: .5,
            centerX: 0,
            bottom: 20
          },
          compId: 7
        }, {
          type: "Label",
          props: {
            width: 400,
            var: "share_desc",
            valign: "middle",
            text: "炫耀精彩瞬间获取5倍奖励",
            fontSize: 25,
            color: "#ffffff",
            centerX: 0,
            bottom: 120,
            bold: !0,
            align: "center"
          },
          compId: 8
        }, {
          type: "Image",
          props: {
            var: "share_close",
            top: -25,
            skin: "ui/close1.png",
            right: -25
          },
          compId: 10
        }]
      }],
      loadList: ["ui/mask.png", "ui/box_red.png", "ui/sharePng.jpg", "ui/share_play.png", "ui/btn_share.png", "ui/close1.png"],
      loadList3D: []
    }, e.ShareViewUI = g, i("ui.ShareViewUI", g);
    class m extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(m.uiView)
      }
    }
    m.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/SigninView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 67
      }, {
        type: "Image",
        props: {
          width: 530,
          var: "signin_box",
          skin: "ui/pfsy-di2.png",
          sizeGrid: "20,20,30,20",
          height: 650,
          centerY: -100,
          centerX: 0
        },
        compId: 4,
        child: [{
          type: "Image",
          props: {
            top: 20,
            skin: "ui/qd-di1.png",
            centerY: -150,
            centerX: -160
          },
          compId: 5,
          child: [{
            type: "Image",
            props: {
              width: 100,
              top: 5,
              skin: "ui/txt_day.png",
              sizeGrid: "0,30,0,30",
              centerX: 0
            },
            compId: 20,
            child: [{
              type: "FontClip",
              props: {
                value: "1",
                skin: "ui/ui_number_white.png",
                sheet: "0123456789",
                scaleY: .9,
                scaleX: .9,
                centerY: 0,
                centerX: 2
              },
              compId: 21
            }]
          }, {
            type: "Image",
            props: {
              skin: "ui/Money_icon.png",
              centerY: 0,
              centerX: 0
            },
            compId: 22
          }, {
            type: "Image",
            props: {
              skin: "ui/close1.png",
              scaleY: .5,
              scaleX: .5,
              centerX: -35,
              bottom: 20
            },
            compId: 24,
            child: [{
              type: "Label",
              props: {
                valign: "middle",
                text: "100",
                stroke: 8,
                left: 80,
                fontSize: 80,
                font: "SimHei",
                color: "#ffffff",
                centerY: 0,
                bold: !0,
                align: "center"
              },
              compId: 25
            }]
          }, {
            type: "Image",
            props: {
              skin: "ui/qd-dui.png",
              centerY: 0,
              centerX: 0
            },
            compId: 26
          }]
        }, {
          type: "Image",
          props: {
            y: 0,
            top: 20,
            skin: "ui/qd-di1.png",
            centerY: -150,
            centerX: 0
          },
          compId: 12,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: 0,
              width: 100,
              top: 5,
              skin: "ui/txt_day.png",
              sizeGrid: "0,30,0,30",
              centerX: 0
            },
            compId: 27,
            child: [{
              type: "FontClip",
              props: {
                value: "2",
                skin: "ui/ui_number_white.png",
                sheet: "0123456789",
                scaleY: .9,
                scaleX: .9,
                centerY: 0,
                centerX: 2
              },
              compId: 31
            }]
          }, {
            type: "Image",
            props: {
              width: 67,
              skin: "ui/Money_icon.png",
              height: 82,
              centerY: 0,
              centerX: -34
            },
            compId: 28,
            child: [{
              type: "Image",
              props: {
                width: 84,
                skin: "img/PF03.png",
                height: 95,
                centerY: -7,
                centerX: 75
              },
              compId: 71
            }, {
              type: "Label",
              props: {
                width: 116,
                visible: !0,
                text: "Spiderman",
                strokeColor: "#ffffff",
                stroke: 4,
                height: 25,
                fontSize: 25,
                font: "SimHei",
                color: "#ff001e",
                centerY: -42,
                centerX: 42,
                bold: !0,
                align: "center"
              },
              compId: 74
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/close1.png",
              scaleY: .5,
              scaleX: .5,
              centerX: -35,
              bottom: 20
            },
            compId: 29,
            child: [{
              type: "Label",
              props: {
                valign: "middle",
                text: "150",
                stroke: 8,
                left: 80,
                fontSize: 80,
                font: "SimHei",
                color: "#ffffff",
                centerY: 0,
                bold: !0,
                align: "center"
              },
              compId: 32
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/qd-dui.png",
              centerY: 0,
              centerX: 0
            },
            compId: 30
          }]
        }, {
          type: "Image",
          props: {
            y: 0,
            top: 20,
            skin: "ui/qd-di1.png",
            centerY: -150,
            centerX: 160
          },
          compId: 13,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: 0,
              width: 100,
              top: 5,
              skin: "ui/txt_day.png",
              sizeGrid: "0,30,0,30",
              centerX: 0
            },
            compId: 33,
            child: [{
              type: "FontClip",
              props: {
                value: "3",
                skin: "ui/ui_number_white.png",
                sheet: "0123456789",
                scaleY: .9,
                scaleX: .9,
                centerY: 0,
                centerX: 2
              },
              compId: 37
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/Money_icon.png",
              centerY: 0,
              centerX: 0
            },
            compId: 34
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/close1.png",
              scaleY: .5,
              scaleX: .5,
              centerX: -35,
              bottom: 20
            },
            compId: 35,
            child: [{
              type: "Label",
              props: {
                valign: "middle",
                text: "300",
                stroke: 8,
                left: 80,
                fontSize: 80,
                font: "SimHei",
                color: "#ffffff",
                centerY: 0,
                bold: !0,
                align: "center"
              },
              compId: 38
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/qd-dui.png",
              centerY: 0,
              centerX: 0
            },
            compId: 36
          }]
        }, {
          type: "Image",
          props: {
            top: 220,
            skin: "ui/qd-di1.png",
            centerY: 50,
            centerX: -160
          },
          compId: 14,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: 0,
              width: 100,
              top: 5,
              skin: "ui/txt_day.png",
              sizeGrid: "0,30,0,30",
              centerX: 0
            },
            compId: 39,
            child: [{
              type: "FontClip",
              props: {
                value: "4",
                skin: "ui/ui_number_white.png",
                sheet: "0123456789",
                scaleY: .9,
                scaleX: .9,
                centerY: 0,
                centerX: 2
              },
              compId: 43
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/Money_icon.png",
              centerY: 0,
              centerX: 0
            },
            compId: 40
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/close1.png",
              scaleY: .5,
              scaleX: .5,
              centerX: -35,
              bottom: 20
            },
            compId: 41,
            child: [{
              type: "Label",
              props: {
                valign: "middle",
                text: "500",
                stroke: 8,
                left: 80,
                fontSize: 80,
                font: "SimHei",
                color: "#ffffff",
                centerY: 0,
                bold: !0,
                align: "center"
              },
              compId: 44
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/qd-dui.png",
              centerY: 0,
              centerX: 0
            },
            compId: 42
          }]
        }, {
          type: "Image",
          props: {
            y: 0,
            top: 220,
            skin: "ui/qd-di1.png",
            centerY: 50,
            centerX: 0
          },
          compId: 15,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: 0,
              width: 100,
              top: 5,
              skin: "ui/txt_day.png",
              sizeGrid: "0,30,0,30",
              centerX: 0
            },
            compId: 45,
            child: [{
              type: "FontClip",
              props: {
                value: "5",
                skin: "ui/ui_number_white.png",
                sheet: "0123456789",
                scaleY: .9,
                scaleX: .9,
                centerY: 0,
                centerX: 2
              },
              compId: 49
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/Money_icon.png",
              centerY: 0,
              centerX: 0
            },
            compId: 46
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/close1.png",
              scaleY: .5,
              scaleX: .5,
              centerX: -35,
              bottom: 20
            },
            compId: 47,
            child: [{
              type: "Label",
              props: {
                valign: "middle",
                text: "750",
                stroke: 8,
                left: 80,
                fontSize: 80,
                font: "SimHei",
                color: "#ffffff",
                centerY: 0,
                bold: !0,
                align: "center"
              },
              compId: 50
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/qd-dui.png",
              centerY: 0,
              centerX: 0
            },
            compId: 48
          }]
        }, {
          type: "Image",
          props: {
            y: 0,
            top: 220,
            skin: "ui/qd-di1.png",
            centerY: 50,
            centerX: 160
          },
          compId: 16,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: 0,
              width: 100,
              top: 5,
              skin: "ui/txt_day.png",
              sizeGrid: "0,30,0,30",
              centerX: 0
            },
            compId: 51,
            child: [{
              type: "FontClip",
              props: {
                value: "6",
                skin: "ui/ui_number_white.png",
                sheet: "0123456789",
                scaleY: .9,
                scaleX: .9,
                centerY: 0,
                centerX: 2
              },
              compId: 55
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/Money_icon.png",
              centerY: 0,
              centerX: 0
            },
            compId: 52
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/close1.png",
              scaleY: .5,
              scaleX: .5,
              centerX: -35,
              bottom: 20
            },
            compId: 53,
            child: [{
              type: "Label",
              props: {
                valign: "middle",
                text: "1100",
                stroke: 8,
                left: 80,
                fontSize: 80,
                font: "SimHei",
                color: "#ffffff",
                centerY: 0,
                bold: !0,
                align: "center"
              },
              compId: 56
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/qd-dui.png",
              centerY: 0,
              centerX: 0
            },
            compId: 54
          }]
        }, {
          type: "Image",
          props: {
            skin: "ui/qd-d1.png",
            centerX: 0,
            bottom: 20
          },
          compId: 17,
          child: [{
            type: "Image",
            props: {
              y: 0,
              x: 0,
              width: 100,
              top: 5,
              skin: "ui/txt_day.png",
              sizeGrid: "0,30,0,30",
              centerX: 0
            },
            compId: 57,
            child: [{
              type: "FontClip",
              props: {
                value: "7",
                skin: "ui/ui_number_white.png",
                sheet: "0123456789",
                scaleY: .9,
                scaleX: .9,
                centerY: 0,
                centerX: 2
              },
              compId: 61
            }]
          }, {
            type: "Image",
            props: {
              skin: "ui/Money_icon.png",
              centerY: 0,
              centerX: -116
            },
            compId: 58,
            child: [{
              type: "Image",
              props: {
                width: 95,
                skin: "img/PF07.png",
                height: 117,
                centerY: -6,
                centerX: 240
              },
              compId: 72
            }, {
              type: "Label",
              props: {
                width: 144,
                visible: !0,
                text: "Mr Rage",
                strokeColor: "#ffffff",
                stroke: 4,
                height: 36,
                fontSize: 30,
                font: "SimHei",
                color: "#ff001e",
                centerY: -6,
                centerX: 126,
                bold: !0,
                align: "center"
              },
              compId: 75
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/close1.png",
              scaleY: .5,
              scaleX: .5,
              centerX: -35,
              bottom: 20
            },
            compId: 59,
            child: [{
              type: "Label",
              props: {
                valign: "middle",
                text: "1500",
                stroke: 8,
                left: 80,
                fontSize: 80,
                font: "SimHei",
                color: "#ffffff",
                centerY: 0,
                bold: !0,
                align: "center"
              },
              compId: 62
            }]
          }, {
            type: "Image",
            props: {
              y: 0,
              x: 0,
              skin: "ui/qd-dui.png",
              centerY: 0,
              centerX: 0
            },
            compId: 60
          }]
        }]
      }, {
        type: "Image",
        props: {
          skin: "ui/qd-d2.png",
          centerY: -380,
          centerX: -84
        },
        compId: 18
      }, {
        type: "Image",
        props: {
          skin: "ui/txt_signin.png",
          centerY: -460,
          centerX: 0
        },
        compId: 19
      }, {
        type: "Image",
        props: {
          width: 250,
          var: "signin_ad5",
          skin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          height: 90,
          centerY: 287,
          centerX: 140
        },
        compId: 63,
        child: [{
          type: "Image",
          props: {
            width: 54,
            skin: "ui/ad_green.png",
            left: 9,
            height: 37,
            centerY: 0
          },
          compId: 64
        }, {
          type: "Image",
          props: {
            width: 110,
            skin: "ui/shuangbei.png",
            scaleY: 1.5,
            scaleX: 1.5,
            left: 72,
            height: 35,
            centerY: 1
          },
          compId: 65
        }]
      }, {
        type: "Image",
        props: {
          width: 250,
          var: "signin_ad",
          skin: "ui/btn_orange.png",
          sizeGrid: "20,20,30,20",
          height: 90,
          centerY: 287,
          centerX: -140
        },
        compId: 68,
        child: [{
          type: "Image",
          props: {
            width: 122,
            skin: "ui/txt_get.png",
            scaleY: 1.5,
            scaleX: 1.5,
            height: 29,
            centerY: 0,
            centerX: 0
          },
          compId: 70
        }]
      }, {
        type: "Image",
        props: {
          width: 70,
          var: "signin_close",
          skin: "ui/close.png",
          height: 70,
          centerY: -380,
          centerX: 212
        },
        compId: 66
      }, {
        type: "Label",
        props: {
          width: 97,
          visible: !0,
          var: "sigin_desc",
          valign: "middle",
          text: "Skin",
          strokeColor: "#ffffff",
          stroke: 4,
          height: 43,
          fontSize: 45,
          font: "SimHei",
          color: "#ff001e",
          centerY: -381,
          centerX: 100,
          bold: !0,
          align: "center"
        },
        compId: 73
      }],
      loadList: ["ui/mask.png", "ui/pfsy-di2.png", "ui/qd-di1.png", "ui/txt_day.png", "ui/ui_number_white.png", "ui/Money_icon.png", "ui/close1.png", "ui/qd-dui.png", "img/PF03.png", "ui/qd-d1.png", "img/PF07.png", "ui/qd-d2.png", "ui/txt_signin.png", "ui/btn_green.png", "ui/ad_green.png", "ui/shuangbei.png", "ui/btn_orange.png", "ui/txt_get.png", "ui/close.png"],
      loadList3D: []
    }, e.SigninViewUI = m, i("ui.SigninViewUI", m);
    class u extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(u.uiView)
      }
    }
    u.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/SkinView.ts",
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          width: 126,
          var: "btn_skin",
          skin: "ui/btn_blue.png",
          sizeGrid: "20,20,20,20",
          height: 126,
          centerY: 178,
          centerX: -197
        },
        compId: 269,
        child: [{
          type: "Image",
          props: {
            skin: "ui/skin.png",
            centerY: -14,
            centerX: 0
          },
          compId: 271
        }]
      }, {
        type: "Image",
        props: {
          width: 126,
          var: "btn_knife",
          skin: "ui/btn_orange.png",
          sizeGrid: "20,20,20,20",
          height: 126,
          centerY: 178,
          centerX: -71
        },
        compId: 272,
        child: [{
          type: "Image",
          props: {
            width: 65,
            skin: "ui/dao.png",
            height: 65,
            centerY: -16,
            centerX: 0
          },
          compId: 273
        }]
      }, {
        type: "Label",
        props: {
          visible: !0,
          var: "skin_desc",
          text: "描述描述描述描述",
          strokeColor: "#ffffff",
          stroke: 4,
          fontSize: 35,
          font: "SimHei",
          color: "#cb00ff",
          centerY: -18,
          centerX: 21,
          bold: !0,
          align: "center"
        },
        compId: 32
      }, {
        type: "Box",
        props: {
          y: 968,
          x: 20,
          width: 600,
          var: "skin_native",
          height: 150,
          centerX: 0,
          bottom: 20
        },
        compId: 31
      }, {
        type: "Image",
        props: {
          width: 520,
          var: "skin_box",
          skin: "ui/btn_orange.png",
          sizeGrid: "20,20,30,20",
          height: 201,
          centerY: 295,
          centerX: 0,
          alpha: 1
        },
        compId: 22,
        child: [{
          type: "Box",
          props: {
            width: 520,
            var: "skinos",
            top: 0,
            right: 0,
            name: "skinos",
            left: 0,
            height: 201,
            bottom: 0
          },
          compId: 83,
          child: [{
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box01",
              renderType: "render",
              name: "Box01",
              left: 19,
              height: 150
            },
            compId: 12,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 8
            }, {
              type: "Image",
              props: {
                width: 110,
                skin: "img/PF01.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 9
            }, {
              type: "Image",
              props: {
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 35,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 26,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 27
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box02",
              renderType: "render",
              name: "Box02",
              left: 185,
              height: 150
            },
            compId: 41,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 42
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "img/PF02.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 43
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 134,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 135,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 136
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box03",
              renderType: "render",
              name: "Box03",
              left: 350,
              height: 150
            },
            compId: 84,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 85
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 115,
                skin: "img/PF03.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 86
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 137,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 138,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 139
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box04",
              renderType: "render",
              name: "Box04",
              left: 515,
              height: 150
            },
            compId: 90,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 91
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "img/PF04.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 92
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 140,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 141,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 142
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box05",
              renderType: "render",
              name: "Box05",
              left: 680,
              height: 150
            },
            compId: 96,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 97
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "img/PF05.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 98
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 143,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 144,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 145
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box06",
              renderType: "render",
              name: "Box06",
              left: 845,
              height: 150
            },
            compId: 102,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 103
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "img/PF06.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 104
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 146,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 147,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 148
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box07",
              renderType: "render",
              name: "Box07",
              left: 1010,
              height: 150
            },
            compId: 108,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 109
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "img/PF07.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 110
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 149,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 150,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 151
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              var: "Box08",
              renderType: "render",
              name: "Box08",
              left: 1175,
              height: 150
            },
            compId: 114,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 115
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "img/PF08.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 116
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 152,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 153,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 154
                }]
              }]
            }]
          }, {
            type: "Image",
            props: {
              y: 85,
              x: 1473,
              width: 150,
              skin: "ui/btn_green.png",
              sizeGrid: "10,10,10,10",
              name: "xuanzhon02",
              height: 150,
              anchorY: .5,
              anchorX: .5
            },
            compId: 122
          }, {
            type: "Image",
            props: {
              y: 85,
              x: 1473,
              width: 150,
              skin: "ui/btn_blue.png",
              sizeGrid: "10,10,10,10",
              name: "xuanzhon01",
              height: 150,
              anchorY: .5,
              anchorX: .5
            },
            compId: 121
          }]
        }, {
          type: "Image",
          props: {
            y: 201,
            x: 260,
            width: 520,
            top: 0,
            skin: "ui/Loader.png",
            right: 0,
            renderType: "mask",
            left: 0,
            height: 201,
            bottom: 0,
            anchorY: 1,
            anchorX: .5
          },
          compId: 40
        }]
      }, {
        type: "Image",
        props: {
          y: 764,
          x: 60,
          width: 520,
          var: "knife_box",
          skin: "ui/btn_orange.png",
          sizeGrid: "20,20,30,20",
          height: 201,
          centerY: 295,
          centerX: 0,
          alpha: 1
        },
        compId: 215,
        child: [{
          type: "Box",
          props: {
            width: 520,
            var: "skinos2",
            top: 0,
            right: 0,
            name: "skinos2",
            left: 0,
            height: 201,
            bottom: 0
          },
          compId: 216,
          child: [{
            type: "Box",
            props: {
              y: 10,
              width: 150,
              renderType: "render",
              name: "Box01",
              left: 19,
              height: 150
            },
            compId: 217,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 218
            }, {
              type: "Image",
              props: {
                width: 110,
                skin: "ui/icon_katana_default.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 219
            }, {
              type: "Image",
              props: {
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 220,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 221,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 222
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              renderType: "render",
              name: "Box02",
              left: 185,
              height: 150
            },
            compId: 223,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 224
            }, {
              type: "Image",
              props: {
                width: 88,
                skin: "ui/002.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 225
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 226,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 227,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 228
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              renderType: "render",
              name: "Box03",
              left: 350,
              height: 150
            },
            compId: 229,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 230
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 115,
                skin: "ui/icon_lee_default.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 231
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 232,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 233,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 234
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              renderType: "render",
              name: "Box04",
              left: 515,
              height: 150
            },
            compId: 235,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 236
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "ui/icon_bat_default.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 237
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 238,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 239,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 240
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              renderType: "render",
              name: "Box05",
              left: 680,
              height: 150
            },
            compId: 241,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 242
            }, {
              type: "Image",
              props: {
                y: 75,
                x: 75,
                width: 110,
                skin: "ui/icon_spider_default.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 243
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 244,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 245,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 246
                }]
              }]
            }]
          }, {
            type: "Box",
            props: {
              y: 10,
              width: 150,
              renderType: "render",
              name: "Box06",
              left: 845,
              height: 150
            },
            compId: 247,
            child: [{
              type: "Image",
              props: {
                width: 150,
                skin: "ui/btn_green.png",
                sizeGrid: "10,10,10,10",
                height: 150,
                centerY: 0,
                centerX: 0
              },
              compId: 248
            }, {
              type: "Image",
              props: {
                width: 101,
                skin: "ui/001.png",
                height: 130,
                centerY: 0,
                centerX: 0,
                anchorY: .5,
                anchorX: .5
              },
              compId: 249
            }, {
              type: "Image",
              props: {
                y: 0,
                x: 0,
                width: 160,
                skin: "ui/box_price.png",
                sizeGrid: "20,20,20,20",
                height: 70,
                centerX: 0,
                bottom: -34
              },
              compId: 250,
              child: [{
                type: "Image",
                props: {
                  width: 33,
                  skin: "ui/Money_icon.png",
                  left: 10,
                  height: 43,
                  centerY: 0
                },
                compId: 251,
                child: [{
                  type: "Label",
                  props: {
                    width: 100,
                    valign: "middle",
                    text: "99999",
                    name: "label_dnum",
                    left: 40,
                    height: 40,
                    fontSize: 40,
                    font: "SimHei",
                    color: "#ffffff",
                    centerY: 0,
                    bold: !0,
                    align: "left"
                  },
                  compId: 252
                }]
              }]
            }]
          }, {
            type: "Image",
            props: {
              y: 85,
              x: 1473,
              width: 150,
              skin: "ui/btn_green.png",
              sizeGrid: "10,10,10,10",
              name: "xuanzhon02",
              height: 150,
              anchorY: .5,
              anchorX: .5
            },
            compId: 265
          }, {
            type: "Image",
            props: {
              y: 85,
              x: 1473,
              width: 150,
              skin: "ui/btn_blue.png",
              sizeGrid: "10,10,10,10",
              name: "xuanzhon01",
              height: 150,
              anchorY: .5,
              anchorX: .5
            },
            compId: 266
          }]
        }, {
          type: "Image",
          props: {
            y: 201,
            x: 260,
            width: 520,
            top: 0,
            skin: "ui/Loader.png",
            right: 0,
            renderType: "mask",
            left: 0,
            height: 201,
            bottom: 0,
            anchorY: 1,
            anchorX: .5
          },
          compId: 267
        }]
      }, {
        type: "Image",
        props: {
          width: 87,
          var: "arrow02",
          skin: "ui/jt.png",
          rotation: -90,
          right: 5,
          name: "arrow02",
          height: 74,
          centerY: 295,
          anchorY: .5,
          anchorX: .5
        },
        compId: 124
      }, {
        type: "Image",
        props: {
          x: 43,
          width: 87,
          var: "arrow01",
          skin: "ui/jt.png",
          rotation: 90,
          name: "arrow01",
          height: 74,
          centerY: 295,
          anchorY: .5,
          anchorX: .5
        },
        compId: 123
      }, {
        type: "Image",
        props: {
          width: 100,
          var: "skin_close",
          skin: "ui/btn_gray.png",
          sizeGrid: "10,10,10,10",
          height: 100,
          centerY: -35,
          centerX: -234
        },
        compId: 6,
        child: [{
          type: "Image",
          props: {
            skin: "ui/home.png",
            scaleY: .7,
            scaleX: .7,
            centerY: 0,
            centerX: 0
          },
          compId: 36
        }]
      }, {
        type: "Image",
        props: {
          width: 300,
          var: "skin_ad02",
          skin: "ui/btn_blue.png",
          sizeGrid: "20,20,30,20",
          height: 100,
          centerY: 65,
          centerX: 110
        },
        compId: 128,
        child: [{
          type: "Image",
          props: {
            skin: "ui/shiyon.png",
            scaleY: 1.5,
            scaleX: 1.5,
            left: 82,
            centerY: 0
          },
          compId: 130
        }]
      }, {
        type: "Image",
        props: {
          width: 300,
          var: "skin_ad",
          skin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          height: 100,
          centerY: 65,
          centerX: 110
        },
        compId: 33,
        child: [{
          type: "Image",
          props: {
            skin: "ui/ad_green.png",
            left: 20,
            centerY: 0
          },
          compId: 37
        }, {
          type: "Image",
          props: {
            skin: "ui/txt_try.png",
            scaleY: 1.5,
            scaleX: 1.5,
            left: 110,
            centerY: 0
          },
          compId: 38
        }]
      }, {
        type: "Image",
        props: {
          width: 228,
          var: "buy_img",
          skin: "ui/btn_blue.png",
          sizeGrid: "20,20,30,20",
          height: 88,
          centerY: 65,
          centerX: -163
        },
        compId: 155,
        child: [{
          type: "Image",
          props: {
            skin: "ui/buy.png",
            sizeGrid: "0,0,0,0",
            centerY: 0,
            centerX: 0
          },
          compId: 161
        }]
      }],
      loadList: ["ui/btn_blue.png", "ui/skin.png", "ui/btn_orange.png", "ui/dao.png", "ui/btn_green.png", "img/PF01.png", "ui/box_price.png", "ui/Money_icon.png", "img/PF02.png", "img/PF03.png", "img/PF04.png", "img/PF05.png", "img/PF06.png", "img/PF07.png", "img/PF08.png", "ui/Loader.png", "ui/icon_katana_default.png", "ui/002.png", "ui/icon_lee_default.png", "ui/icon_bat_default.png", "ui/icon_spider_default.png", "ui/001.png", "ui/jt.png", "ui/btn_gray.png", "ui/home.png", "ui/shiyon.png", "ui/ad_green.png", "ui/txt_try.png", "ui/buy.png"],
      loadList3D: []
    }, e.SkinViewUI = u, i("ui.SkinViewUI", u);
    class y extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(y.uiView)
      }
    }
    y.uiView = {
      type: "View",
      props: {
        width: 640,
        runtime: "runtime/TipView.ts",
        height: 50
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          width: 600,
          skin: "ui/tip_box.png",
          sizeGrid: "20,20,20,20",
          height: 50,
          centerY: 0,
          centerX: 0,
          bgColor: "#4e4e4e"
        },
        compId: 3,
        child: [{
          type: "Label",
          props: {
            width: 550,
            var: "tip_txt",
            valign: "middle",
            text: "广告准备中",
            fontSize: 30,
            color: "#000000",
            centerY: 0,
            centerX: 0,
            bold: !0,
            anchorY: .5,
            anchorX: .5,
            align: "center"
          },
          compId: 4
        }]
      }],
      loadList: ["ui/tip_box.png"],
      loadList3D: []
    }, e.TipViewUI = y, i("ui.TipViewUI", y);
    class w extends Laya.View {
      constructor() {
        super()
      }
      createChildren() {
        super.createChildren(), this.createView(w.uiView)
      }
    }
    w.uiView = {
      type: "View",
      props: {
        width: 640,
        height: 1138
      },
      compId: 2,
      child: [{
        type: "Image",
        props: {
          y: 0,
          x: 0,
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 13
      }, {
        type: "Image",
        props: {
          width: 300,
          var: "win_ad",
          skin: "ui/btn_blue.png",
          sizeGrid: "20,20,30,20",
          height: 100,
          centerY: -201,
          centerX: 0
        },
        compId: 4,
        child: [{
          type: "Image",
          props: {
            skin: "ui/ad_blue.png",
            left: 20,
            centerY: 0
          },
          compId: 5
        }, {
          type: "Image",
          props: {
            y: 0,
            skin: "ui/txt_5.png",
            scaleY: 1.5,
            scaleX: 1.5,
            left: 100,
            centerY: 0
          },
          compId: 6
        }]
      }, {
        type: "Image",
        props: {
          width: 200,
          var: "win_close",
          skin: "ui/btn_gray.png",
          sizeGrid: "20,20,30,20",
          height: 80,
          centerY: -94,
          centerX: 9
        },
        compId: 7,
        child: [{
          type: "Image",
          props: {
            skin: "ui/txt_get.png",
            centerY: 0,
            centerX: 0
          },
          compId: 8
        }]
      }, {
        type: "Image",
        props: {
          skin: "ui/Money_icon.png",
          centerY: -315,
          centerX: -94
        },
        compId: 9,
        child: [{
          type: "Label",
          props: {
            text: "X",
            strokeColor: "#ffffff",
            stroke: 6,
            scaleY: .7,
            left: 110,
            fontSize: 80,
            font: "SimHei",
            color: "#ff8e00",
            centerY: 0,
            bold: !0
          },
          compId: 10
        }, {
          type: "FontClip",
          props: {
            width: 300,
            var: "win_coin",
            value: "100",
            skin: "ui/huang.png",
            sheet: "0123456789",
            scaleY: .7,
            scaleX: .7,
            left: 170,
            centerY: 0,
            align: "left"
          },
          compId: 11
        }]
      }, {
        type: "Box",
        props: {
          width: 600,
          visible: !1,
          var: "win_native",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          name: "win_native",
          height: 428,
          centerY: 235,
          centerX: 0
        },
        compId: 12,
        child: [{
          type: "Image",
          props: {
            visible: !1,
            top: 0,
            skin: "ui/nativeBox.png",
            right: 0,
            name: "bg",
            left: 0,
            bottom: 0
          },
          compId: 14
        }, {
          type: "Image",
          props: {
            y: 29,
            x: 27,
            width: 546,
            visible: !0,
            name: "ad",
            height: 385
          },
          compId: 15
        }, {
          type: "Image",
          props: {
            y: 46,
            x: 44,
            width: 58,
            visible: !0,
            skin: "ui/close.png",
            name: "close",
            height: 58
          },
          compId: 20
        }, {
          type: "Label",
          props: {
            y: 12,
            x: 37,
            width: 499,
            visible: !1,
            text: "label",
            name: "title",
            height: 65,
            fontSize: 50,
            font: "SimHei",
            color: "#ffffff",
            align: "center"
          },
          compId: 16
        }, {
          type: "Label",
          props: {
            y: 258,
            x: 54.5,
            width: 475,
            visible: !1,
            text: "label",
            name: "desc",
            height: 33,
            fontSize: 20,
            font: "SimSun",
            color: "#ffffff",
            align: "center"
          },
          compId: 17
        }, {
          type: "Label",
          props: {
            y: 40,
            x: 456.5,
            width: 73,
            text: "广告",
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 18
        }, {
          type: "Image",
          props: {
            y: -62,
            x: 206.5,
            width: 171,
            visible: !0,
            skin: "ui/ckgg.png",
            name: "adlook",
            height: 82
          },
          compId: 19
        }]
      }, {
        type: "Box",
        props: {
          y: 355,
          x: 20,
          width: 600,
          visible: !1,
          var: "wins_native",
          styleSkin: "ui/btn_green.png",
          sizeGrid: "20,20,30,20",
          name: "wins_native",
          height: 428,
          centerY: 0,
          centerX: 0
        },
        compId: 21,
        child: [{
          type: "Image",
          props: {
            y: -440,
            x: -248,
            width: 1e3,
            visible: !0,
            skin: "ui/box_price.png",
            height: 1400
          },
          compId: 75
        }, {
          type: "Image",
          props: {
            y: -39,
            x: -19,
            width: 638,
            visible: !0,
            skin: "ui/nativeBox.png",
            name: "bg",
            height: 482
          },
          compId: 22
        }, {
          type: "Image",
          props: {
            y: 44,
            x: 27,
            width: 546,
            visible: !0,
            name: "ad",
            height: 339
          },
          compId: 23
        }, {
          type: "Label",
          props: {
            y: 395,
            x: 26,
            width: 544,
            visible: !1,
            valign: "middle",
            text: "惊喜",
            name: "desc",
            height: 33,
            fontSize: 20,
            font: "SimSun",
            color: "#000000",
            bold: !0,
            align: "center"
          },
          compId: 26
        }, {
          type: "Label",
          props: {
            y: -32,
            x: 104,
            width: 396,
            visible: !0,
            valign: "middle",
            text: "惊喜",
            name: "title",
            height: 65,
            fontSize: 40,
            font: "SimHei",
            color: "#000000",
            align: "center"
          },
          compId: 25
        }, {
          type: "Label",
          props: {
            y: 75,
            x: 469,
            width: 73,
            text: "广告",
            name: "gg",
            height: 37,
            fontSize: 30,
            font: "SimHei",
            color: "#ffffff",
            bgColor: "#000000",
            align: "center"
          },
          compId: 27
        }, {
          type: "Image",
          props: {
            y: 457,
            width: 171,
            visible: !0,
            skin: "ui/ckgg.png",
            name: "adlook",
            height: 82,
            centerX: -2
          },
          compId: 28
        }, {
          type: "Image",
          props: {
            y: 75,
            x: 35,
            width: 30,
            visible: !0,
            skin: "ui/close.png",
            name: "close",
            height: 30
          },
          compId: 24
        }]
      }, {
        type: "Image",
        props: {
          var: "popup",
          top: 0,
          skin: "ui/mask.png",
          right: 0,
          left: 0,
          bottom: 0
        },
        compId: 44,
        child: [{
          type: "Image",
          props: {
            skin: "ui2/2.png",
            scaleY: 1,
            scaleX: 1,
            centerY: -100,
            centerX: 0
          },
          compId: 46
        }, {
          type: "Image",
          props: {
            skin: "ui2/3.png",
            scaleY: 1,
            scaleX: 1,
            centerY: -286,
            centerX: 0
          },
          compId: 48
        }, {
          type: "Image",
          props: {
            skin: "ui/Money_icon.png",
            centerY: 106,
            centerX: -107
          },
          compId: 55,
          child: [{
            type: "Label",
            props: {
              text: "X",
              strokeColor: "#ffffff",
              stroke: 6,
              scaleY: .7,
              left: 110,
              fontSize: 80,
              font: "SimHei",
              color: "#ff8e00",
              centerY: 0,
              bold: !0
            },
            compId: 56
          }, {
            type: "FontClip",
            props: {
              width: 300,
              value: "500",
              skin: "ui/huang.png",
              sheet: "0123456789",
              scaleY: .7,
              scaleX: .7,
              left: 170,
              centerY: 0,
              align: "left"
            },
            compId: 57
          }]
        }, {
          type: "Image",
          props: {
            y: -45,
            x: 188,
            skin: "ui2/3.png",
            scaleY: 1,
            scaleX: 1,
            centerY: -286,
            centerX: 0
          },
          compId: 60
        }, {
          type: "Image",
          props: {
            var: "popup_close",
            skin: "ui2/close1.png",
            scaleY: .6,
            scaleX: .6,
            centerY: -277,
            centerX: 176
          },
          compId: 61
        }, {
          type: "Image",
          props: {
            width: 300,
            var: "popup_ad",
            skin: "ui/btn_blue.png",
            sizeGrid: "20,20,30,20",
            scaleY: .7,
            scaleX: .7,
            height: 100,
            centerY: 280,
            centerX: 0
          },
          compId: 62,
          child: [{
            type: "Image",
            props: {
              skin: "ui/ad_blue.png",
              left: 20,
              centerY: 0
            },
            compId: 63
          }, {
            type: "Image",
            props: {
              y: 0,
              skin: "ui/txt_5.png",
              scaleY: 1.5,
              scaleX: 1.5,
              left: 100,
              centerY: 0
            },
            compId: 64
          }]
        }, {
          type: "Box",
          props: {
            width: 341,
            visible: !1,
            var: "popup_native",
            styleSkin: "ui/btn_green.png",
            sizeGrid: "20,20,30,20",
            height: 257,
            centerY: -90,
            centerX: 0
          },
          compId: 65,
          child: [{
            type: "Image",
            props: {
              visible: !1,
              top: 0,
              skin: "ui/nativeBox.png",
              right: 0,
              name: "bg",
              left: 0,
              bottom: 0
            },
            compId: 66
          }, {
            type: "Image",
            props: {
              visible: !0,
              top: 0,
              right: 0,
              name: "ad",
              left: 0,
              bottom: 0
            },
            compId: 67
          }, {
            type: "Image",
            props: {
              y: 10,
              x: 10,
              width: 58,
              visible: !0,
              skin: "ui/close.png",
              scaleY: .6,
              scaleX: .6,
              name: "close",
              height: 58
            },
            compId: 68
          }, {
            type: "Label",
            props: {
              y: 10,
              x: 84,
              width: 499,
              visible: !1,
              text: "label",
              scaleY: .3,
              scaleX: .3,
              name: "title",
              height: 65,
              fontSize: 50,
              font: "SimHei",
              color: "#ffffff",
              align: "center"
            },
            compId: 69
          }, {
            type: "Label",
            props: {
              y: 258,
              x: 54.5,
              width: 475,
              visible: !1,
              text: "label",
              name: "desc",
              height: 33,
              fontSize: 20,
              font: "SimSun",
              color: "#ffffff",
              align: "center"
            },
            compId: 70
          }, {
            type: "Label",
            props: {
              width: 73,
              top: 0,
              text: "广告",
              scaleY: .6,
              scaleX: .6,
              right: 0,
              name: "gg",
              height: 37,
              fontSize: 30,
              font: "SimHei",
              color: "#ffffff",
              bgColor: "#000000",
              align: "center"
            },
            compId: 71
          }, {
            type: "Image",
            props: {
              width: 200,
              skin: "ui/btn_gray.png",
              sizeGrid: "20,20,30,20",
              name: "adlook",
              height: 80,
              centerY: 483,
              centerX: 0
            },
            compId: 73,
            child: [{
              type: "Image",
              props: {
                skin: "ui/ckgg.png",
                centerY: 0,
                centerX: 0
              },
              compId: 74
            }]
          }]
        }]
      }],
      loadList: ["ui/mask.png", "ui/btn_blue.png", "ui/ad_blue.png", "ui/txt_5.png", "ui/btn_gray.png", "ui/txt_get.png", "ui/Money_icon.png", "ui/huang.png", "ui/btn_green.png", "ui/nativeBox.png", "ui/close.png", "ui/ckgg.png", "ui/box_price.png", "ui2/2.png", "ui2/3.png", "ui2/close1.png"],
      loadList3D: []
    }, e.WinViewUI = w, i("ui.WinViewUI", w)
  }(e || (e = {}));
  class o {
    constructor() {
      this.guanData = [1, 2, 1, 1, 1, 1, 1], this.IpLock = !1, this.TimeLock = {
        month: 7,
        date: 8,
        hours: 18
      }, this.ServerURL = "https://00kqyhttp-1257034461.cos.ap-guangzhou.myqcloud.com/00shoeRace/routine.json", this.advType = 0, this.fogData = [new Laya.Vector3(246 / 255, 199 / 255, 176 / 255), new Laya.Vector3(191 / 255, 235 / 255, 184 / 255), new Laya.Vector3(243 / 255, 176 / 255, 203 / 255), new Laya.Vector3(251 / 255, 234 / 255, 180 / 255), new Laya.Vector3(180 / 255, 210 / 255, 251 / 255), new Laya.Vector3(198 / 255, 174 / 255, 249 / 255), new Laya.Vector3(188 / 255, 240 / 255, 253 / 255), new Laya.Vector3(0, 100 / 255, 250 / 255), new Laya.Vector3(100 / 255, 100 / 255, 100 / 255)], this.wallData = [new Laya.Vector4(200 / 255, 200 / 255, 200 / 255, 1), new Laya.Vector4(100 / 255, 100 / 255, 100 / 255, 1), new Laya.Vector4(0, 90 / 255, 1, 1), new Laya.Vector4(80 / 255, 80 / 255, 80 / 255, 1), new Laya.Vector4(200 / 255, 0, 150 / 255, 1), new Laya.Vector4(30 / 255, 25 / 255, 0, 1), new Laya.Vector4(100 / 255, 130 / 255, 170 / 255, 1), new Laya.Vector4(140 / 255, 0, 200 / 255, 1), new Laya.Vector4(0, 200 / 255, 200 / 255, 1), new Laya.Vector4(0, 80 / 255, 100 / 255, 1)], this.isSoundOn = !0, this.isMusicOn = !0, this.isShakeOn = !0, this.GAMESTATE = {
        REAYD: 0,
        PLAYING: 1,
        WIN: 2,
        LOSE: 3,
        REVIVE: 4
      }, this.SOUNDURL = {
        LOSE: "game/audio/lose.mp3",
        STAR: "game/audio/star.mp3",
        WIN: "game/audio/win.mp3",
        BGM: "game/audio/bgm.mp3",
        AWARD: "game/audio/award.mp3",
        EMPTY: "game/audio/empty.mp3",
        SHOOT1: "game/audio/shoot1.mp3",
        CLICK: "game/audio/click.mp3",
        COIN: "game/audio/coin.mp3",
        SWORD: "game/audio/sword.mp3",
        SHOOT: "game/audio/shoot.mp3",
        PZ: "game/audio/obj.mp3"
      }, this.UIVIEW = {
        MAINVIEW: "MainView",
        GAMEVIEW: "GameView",
        LOSEVIEW: "LoseView",
        REVIVEVIEW: "ReviveView",
        WINVIEW: "WinView",
        NATIVEVIEW: "NativeView",
        PUSHVIEW: "PushView",
        SHAREVIEW: "ShareView",
        SKINVIEW: "SkinView",
        TIPVIEW: "TipView",
        SIGNINVIEW: "SigninView",
        ANIVIEW: "AniView"
      }, this.EXCHANGECODE = [""], this.KEY = {
        GAMESTATE: "开始游戏",
        Native1: "广告1",
        Native2: "广告2",
        Native3: "广告3"
      }, this.VALUE = {
        CLICK: "click",
        VIEW: "view",
        DEFAULT: "default"
      }, this.City = "", this.mouseEvent = [], this.IconMouse = [], this.Insert = !1, this.Rift = !1, this.Adblock = !1
    }
  }
  o.Instance = new o,
    function (e) {
      e[e.normal = 0] = "normal", e[e.sbkaishi = 1] = "sbkaishi", e[e.wblingqu = 2] = "wblingqu", e[e.jxyx = 3] = "jxyx", e[e.signFanbei = 4] = "signFanbei", e[e.skinUse = 5] = "skinUse", e[e.skinDiscount = 6] = "skinDiscount", e[e.reward01 = 7] = "reward01", e[e.reward02 = 8] = "reward02", e[e.reward03 = 9] = "reward03", e[e.reward04 = 10] = "reward04", e[e.reward05 = 11] = "reward05", e[e.reward06 = 12] = "reward06", e[e.reward07 = 13] = "reward07", e[e.reward08 = 14] = "reward08", e[e.reward09 = 15] = "reward09", e[e.skinsuiji = 16] = "skinsuiji", e[e.dewuqi = 17] = "dewuqi", e[e.tcjl = 18] = "tcjl"
    }(t || (t = {}));
  var n = o.Instance;
  class a {
    constructor() {
      this.skinUnlock = [!0, !1, !1, !1, !1, !1, !1, !1], this.weaponsUnlock = [!0, !1, !1, !1, !1, !1], this.ResetData()
    }
    ResetData() {
      this.musicState = !0, this.shakeState = !0, this.dealstate = !1, this.passLevel = 0, this.money = 0, this.signinCount = 0, this.signinDay = 7, this.totalLevel = 0, this.skinUnlock = [!0, !1, !1, !1, !1, !1, !1, !1], this.weaponsUnlock = [!0, !1, !1, !1, !1, !1], this.Currentskin = 0, this.Currentweapons = 0, this.bosslevel = 0
    }
  }
  class s {
    constructor() {
      this._gameData_ = new a, s.Instance = this, this.dataKey = "_Mykiller_"
    }
    ReadData() {
      if ($.platform == J.VivoMinGame) {
        let e = Laya.LocalStorage.getItem(this.dataKey);
        "" != e && null != e && (this._gameData_ = JSON.parse(e))
      } else {
        let e = Laya.LocalStorage.getJSON(this.dataKey);
        "" != e && null != e && (this._gameData_ = e)
      }
      this.SaveData()
    }
    SaveData() {
      $.platform == J.VivoMinGame ? Laya.LocalStorage.setItem(this.dataKey, JSON.stringify(this._gameData_)) : Laya.LocalStorage.setJSON(this.dataKey, this._gameData_)
    }
    get musicState() {
      return this._gameData_.musicState
    }
    set musicState(e) {
      this._gameData_.musicState = e
    }
    get shakeState() {
      return this._gameData_.shakeState
    }
    set shakeState(e) {
      this._gameData_.shakeState = e
    }
    get dealstate() {
      return this._gameData_.dealstate
    }
    set dealstate(e) {
      this._gameData_.dealstate = e
    }
    get passLevel() {
      return this._gameData_.passLevel
    }
    set passLevel(e) {
      this._gameData_.passLevel = e
    }
    get totalLevel() {
      return this._gameData_.totalLevel
    }
    set totalLevel(e) {
      this._gameData_.totalLevel = e
    }
    get money() {
      return this._gameData_.money
    }
    set money(e) {
      this._gameData_.money = e
    }
    get signinCount() {
      return this._gameData_.signinCount
    }
    set signinCount(e) {
      this._gameData_.signinCount = e
    }
    get signinDay() {
      return this._gameData_.signinDay
    }
    set signinDay(e) {
      this._gameData_.signinDay = e
    }
    get skinUnlock() {
      return this._gameData_.skinUnlock
    }
    set skinUnlock(e) {
      this._gameData_.skinUnlock = e
    }
    get weaponsUnlock() {
      return this._gameData_.weaponsUnlock
    }
    set weaponsUnlock(e) {
      this._gameData_.weaponsUnlock = e
    }
    get Currentskin() {
      return this._gameData_.Currentskin
    }
    set Currentskin(e) {
      this._gameData_.Currentskin = e
    }
    get Currentweapons() {
      return this._gameData_.Currentweapons
    }
    set Currentweapons(e) {
      this._gameData_.Currentweapons = e
    }
    get bosslevel() {
      return this._gameData_.bosslevel
    }
    set bosslevel(e) {
      this._gameData_.bosslevel = e
    }
  }
  s.Instance = new s;
  var r = s.Instance;
  class h {
    static pull(e = "") {
      let t = this;
      var i = new XMLHttpRequest;
      i.open("GET", t.url1, !0), i.setRequestHeader("TOKEN", t.APPID), 1024 != t.latitude && 1024 != t.longitude && (i.setRequestHeader("latitude", "" + t.latitude), i.setRequestHeader("latitude", "" + t.longitude)), i.send(e), i.onreadystatechange = function () {
        if (4 == i.readyState && 200 == i.status) {
          let e = JSON.parse(i.response);
          n.callBack = e.data.callBack, "666" == e.status ? (n.Adblock = !0, n.City = e.data.regionalBlack.City) : "-666" == e.status && (n.Adblock = !1), t.replace(n.callBack), t.isRift(), t.isInsert()
        }
      }
    }
    static Reported(e, t, i = "") {
      let o = e;
      e != n.KEY.GAMESTATE && (o = e + " - " + i);
      var a = {
        type: o,
        pattern: t
      },
        s = new XMLHttpRequest;
      s.open("PUT", this.url2, !0), s.setRequestHeader("TOKEN", this.APPID), s.setRequestHeader("Content-Type", "application/json"), s.send(JSON.stringify(a)), s.onreadystatechange = function () {
        4 == s.readyState && 200 == s.status && console.log(e, JSON.parse(s.responseText))
      }
    }
    static callBack() {
      var e = new XMLHttpRequest;
      e.open("PUT", this.url3, !0), e.setRequestHeader("TOKEN", this.APPID), e.setRequestHeader("Content-Type", "application/json"), e.send(JSON.stringify({
        key: "All"
      })), e.onreadystatechange = function () {
        4 == e.readyState && 200 == e.status && console.log(JSON.parse(e.responseText))
      }
    }
    static replace(e) {
      if (e) {
        if (e.MouseEvent) {
          e.MouseEvent = e.MouseEvent + "ABD";
          let t = e.MouseEvent.replace(/[^0]/gi, "");
          t && n.mouseEvent.push(t);
          let i = e.MouseEvent.replace(/[^1]/gi, "");
          i && n.mouseEvent.push(i);
          let o = e.MouseEvent.replace(/[^2]/gi, "");
          o && n.mouseEvent.push(o);
          let a = e.MouseEvent.replace(/[^3]/gi, "");
          a && n.mouseEvent.push(a)
        }
        if (e.IconMouse) {
          e.IconMouse = e.IconMouse + "ABD";
          let t = e.IconMouse.replace(/[^0]/gi, "");
          t && n.IconMouse.push(t);
          let i = e.IconMouse.replace(/[^1]/gi, "");
          i && n.IconMouse.push(i);
          let o = e.IconMouse.replace(/[^2]/gi, "");
          o && n.IconMouse.push(o);
          let a = e.IconMouse.replace(/[^3]/gi, "");
          a && n.IconMouse.push(a)
        }
        console.log(n.mouseEvent, n.IconMouse)
      }
    }
    static isInsert() {
      n.Insert = n.Adblock && n.callBack.Insert && "1" == n.callBack.Insert
    }
    static isRift() {
      n.Rift = n.Adblock && n.callBack.Rift && "1" == n.callBack.Rift
    }
  }
  h.APPID = "2c294ad0-4ddf-11ec-a176-525400a89777", h.url = "https://panel.ipmost.com/api/index", h.url1 = "https://panel.ipmost.com/api/project/index", h.url2 = "https://panel.ipmost.com/api/statistics/index", h.url3 = "https://panel.ipmost.com/api/callBack/index", h.latitude = 1024, h.longitude = 1024;
  class l {
    constructor() {
      this.nativerIdex = -1
    }
    init() {
      h.pull()
    }
    ViewGameBanner() { }
    HideGameBanner() { }
    initOppoMoreGame(e) { }

    getIsCachedVideo() {
      return !0
    }
    openRewardVideo() { }
    hideBanner() { }
    showBanner(e) { }
    openVibrateShort() { }
    openVibrateLong() { }
    openVibrate() { }
    sendDesktop(e) { }
    showInstertView() { }
    hasShortcutInstalled(e) { }
    getIsDesktop() {
      return !1
    }
    openSplashAd() {
      // this.bridge.call("openSplashActivity")
    }
    openRewardVideo() {
      showVideoMini((res) => {
        if (res) {
          AndroidToJs.CallJs("Advertisement", "5,1")
        } else {
          AndroidToJs.CallJs("Advertisement", "5,0")
        }
      })

    }
    openAdvert(e) {
      switch (e) {
        case 8:
          this.openSplashAd();
          break;
        case 5:
          this.openRewardVideo();
          break;
        case 3:
          this.showInstertView()
      }
    }
    playMusic(e, t = 0) {
      if ("" == e) return console.log("playMusic   背景音乐播放失败  = " + e);
      Laya.SoundManager.playMusic(e, t)
    }
    stopMusic() {
      Laya.SoundManager.stopMusic()
    }
    playSound(e, t = 1) {
      r.musicState && n.isSoundOn && (Laya.SoundManager.playSound(e, t), Laya.SoundManager.soundVolume = .7)
    }
    openGame(e) {
      console.log(e)
    }
    checkIsMiGame(e) {
      e(2)
    }
    getHeight() {
      return Laya.Browser.height
    }
    exitGame() { }
    showToast() { }
    createLupingBtn() { }
    createMoreGameBtn() { }
    loadNativeAd(e = 0) { }
    showNativeInsert(e, t = 0) { }
    loadInsert(e, t) { }
    recordVideo(e = null) { }
    pauseRecord() { }
    showTTBanner(e) { }
    showQQBox() { }
    AutoRecordVideo(e, t) { }
    showNativeInBox(e, t, i) { }
    reportMonitor() { }
    showOppoBanner(e) { }
    intQQBlockAd(e) { }
    showwxBox(e) { }
    showGongge() { }
    vivoNative(e, t) { }
    initNatives() { }
    initNative(e) { }
  }
  class d extends l {
    constructor() {
      super(), this.bridge = null, this.bridgeJsb = null, this.bridge = PlatformClass.createClass("jsb.JsbAndroid")
    }
    openAdvert(e) {
      switch (e) {
        case 8:
          this.openSplashAd();
          break;
        case 5:
          this.openRewardVideo();
          break;
        case 3:
          this.showInstertView()
      }
    }
    openSplashAd() {
      this.bridge.call("openSplashActivity")
    }
    getIsCachedVideo() {
      return this.bridge.call("getIsCachedVideo")
    }
    openRewardVideo() {
      this.bridge.call("openRewardVideo")
    }
    getIsInstertView() {
      return !0
    }
    showInstertView() {
      this.bridge.call("showInterstital")
    }
    openVibrateLong() {
      this.bridge.call("openVibrate", 200)
    }
    exitGame() {
      this.bridge.call("exitGame")
    }
  }
  var p = Laya.Vector3,
    c = Laya.Event;
  class g {
    static getAllCollisonSprite3D(e) {
      let t = [];
      for (let i = 0; i < e.numChildren; i++) {
        let o = e.getChildAt(i);
        if (o)
          if (0 == o.numChildren) t.push(o);
          else {
            o.getComponent(Laya.Rigidbody3D) && t.push(o), t = t.concat(this.getAllCollisonSprite3D(o))
          }
      }
      return t
    }
    static Vec2Sub(e, t) {
      let i = new Laya.Vector2;
      return i.x = e.x - t.x, i.y = e.y - t.y, i
    }
    static Vec3Sub(e, t) {
      let i = new Laya.Vector3;
      return i.x = e.x - t.x, i.y = e.y - t.y, i.z = e.z - t.z, i
    }
    static copyVec3ToNew(e) {
      let t = new p;
      return t.x = e.x, t.y = e.y, t.z = e.z, t
    }
    static getVec3Dis(e, t) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.z - t.z, 2))
    }
    static vector3ToAngle(e, t) {
      let i = new Laya.Vector3;
      Laya.Vector3.subtract(e, t, i);
      let o = Math.atan2(i.z, i.x) / Math.PI * 180;
      return o <= 0 && (o += 360), o
    }
    static pointsTurnVector3(e, t) {
      let i = new Laya.Vector3;
      return Laya.Vector3.subtract(e, t, i), Laya.Vector3.normalize(i, i), i
    }
    static GetLocalData(e) {
      try {
        return $.platform, J.VivoMinGame, Laya.LocalStorage.getItem(e)
      } catch (e) {
        return null
      }
    }
    static SetLocalData(e, t) {
      $.platform == J.JsbXiaomiMiniGame || Laya.LocalStorage.setItem(e, t)
    }
    static registerScaleListener(e, t, i, o, n = !1) {
      let a = !1;
      this.registerTouchListenner(e, t, () => {
        e.scale(o, o), a = !0
      }, () => { }, o => {
        e.scale(1, 1), a && i.call(t, o)
      }, () => {
        a = !1, e.scale(1, 1)
      }, n)
    }
    static registerTouchListenner(e, t, i = null, o = null, n = null, a = null, s = !1) {
      "function" == typeof i && e.on(c.MOUSE_DOWN, this, e => {
        s && e.stopPropagation(), i.call(t, e)
      }), "function" == typeof o && e.on(c.MOUSE_MOVE, this, e => {
        s && e.stopPropagation(), o.call(t, e)
      }), "function" == typeof n && e.on(c.MOUSE_UP, this, e => {
        s && e.stopPropagation(), n.call(t, e)
      }), "function" == typeof a && e.on(c.MOUSE_OUT, this, e => {
        s && e.stopPropagation(), a.call(t, e)
      })
    }
    static clearTouchListenner(e) {
      e.offAll(Laya.Event.MOUSE_DOWN), e.offAll(Laya.Event.MOUSE_MOVE), e.offAll(Laya.Event.MOUSE_UP), e.offAll(Laya.Event.MOUSE_OUT)
    }
    static getDelta() {
      return Laya.timer.delta >= 200 ? 0 : Laya.timer.delta / 1e3
    }
    static checkRayAllCollison(e, t, i, o, n, a) {
      let s = [];
      return e.physicsSimulation.shapeCastAll(t, i, o, s, new Laya.Quaternion, new Laya.Quaternion, n, a), s
    }
    static eularToQuaternion(e, t, i) {
      let o = e / 180 * Math.PI,
        n = t / 180 * Math.PI,
        a = i / 180 * Math.PI,
        s = Math.cos(n / 2) * Math.sin(o / 2) * Math.cos(a / 2) + Math.sin(n / 2) * Math.cos(o / 2) * Math.sin(a / 2),
        r = Math.sin(n / 2) * Math.cos(o / 2) * Math.cos(a / 2) - Math.cos(n / 2) * Math.sin(o / 2) * Math.sin(a / 2),
        h = Math.cos(n / 2) * Math.cos(o / 2) * Math.sin(a / 2) - Math.sin(n / 2) * Math.sin(o / 2) * Math.cos(a / 2),
        l = Math.cos(n / 2) * Math.cos(o / 2) * Math.cos(a / 2) + Math.sin(n / 2) * Math.sin(o / 2) * Math.sin(a / 2);
      return new Laya.Quaternion(s, r, h, l)
    }
    static quaternioneToEular(e) {
      let t = 57.3 * Math.asin(2 * (e.w * e.y - e.z * e.z)),
        i = 57.3 * Math.atan2(2 * (e.x * e.w + e.y * e.z), 1 - 2 * (e.x * e.x + e.y * e.y)),
        o = 57.3 * Math.atan2(2 * (e.w * e.z + e.x * e.y), 1 - 2 * (e.z * e.z + e.y * e.y));
      return new Laya.Vector3(t, i, o)
    }
    static vector3Add(e, t) {
      let i = new Laya.Vector3;
      return i.x = e.x + t.x, i.y = e.y + t.y, i.z = e.z + t.z, i
    }
    static vector3Sub(e, t) {
      let i = new Laya.Vector3;
      return Laya.Vector3.subtract(e, t, i), i
    }
    static MoveTowards(e, t, i) {
      let o = t.x - e.x,
        n = t.y - e.y,
        a = t.z - e.z,
        s = o * o + n * n + a * a;
      if (0 == s || s <= i * i) return t;
      let r = Math.sqrt(s);
      return new p(e.x + o / r * i, e.y + n / r * i, e.z + a / r * i)
    }
    static RotateTowards(e, t, i) {
      let o = this.Angle(e, t);
      if (0 == o) return t;
      let n = new Laya.Quaternion;
      return Laya.Quaternion.slerp(e, t, Math.min(1, i / o), n), n
    }
    static Angle(e, t) {
      let i = this.Dot(e, t);
      return this.IsEqualUsingDot(i) ? 0 : 2 * Math.acos(Math.min(Math.abs(i), 1)) * this.Rad2Deg
    }
    static IsEqualUsingDot(e) {
      return e > 1 - this.kEpsilon
    }
    static get Rad2Deg() {
      return 1 / Math.PI * 2 / 360
    }
    static Dot(e, t) {
      return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
    }
    static generateUUID() {
      let e = (new Date).getTime();
      window.performance && "function" == typeof window.performance.now && (e += performance.now());
      let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var i = (e + 16 * Math.random()) % 16 | 0;
        return e = Math.floor(e / 16), ("x" == t ? i : 3 & i | 8).toString(16)
      });
      return console.log(t), t
    }
    static GetNetJson(e, t, i = null) {
      let o = new Laya.HttpRequest;
      o.once(Laya.Event.COMPLETE, this, t), i && o.once(Laya.Event.ERROR, this, i), o.send(e, "", "get", "json", ["Cache-Control", "no-cache"])
    }
    static DataDocking(e, t) {
      let i = new Laya.HttpRequest;
      i.http.open("POST", e), i.http.setRequestHeader("Content-Type", "application/json"), i.http.send(t)
    }
    static Calculate(e, t) {
      let i = new Laya.Vector3(0, 0, 0);
      Laya.Vector3.subtract(t, e, i);
      let o = 180 * Math.atan2(i.x, i.y) / Math.PI;
      return o = Math.round(o)
    }
    static getJsonblock() {
      Laya.loader.create(n.ServerURL, Laya.Handler.create(this, e => {
        e ? (n.ServerJSON = Laya.loader.getRes(n.ServerURL), this.getlock()) : (n.Adblock = !0, $.Jsb.init())
      }))
    }
    static connect() {
      let e = new Laya.HttpRequest;
      e.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress), e.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete), e.once(Laya.Event.ERROR, this, this.onHttpRequestError), e.send("https://whois.pconline.com.cn/ipJson.jsp?json=true", null, "get", "json")
    }
    static onHttpRequestError(e) {
      console.log(e), this.Ipjudge()
    }
    static onHttpRequestProgress(e) {
      console.log(e), this.Ipjudge()
    }
    static onHttpRequestComplete(e) {
      this.Ipjudge(e)
    }
    static Ipjudge(e = null) {
      e && (this.Ipsite = e.cityCode), this.getJsonblock()
    }
    static getlock() {
      var e = new Date;
      this.year = e.getFullYear(), this.month = e.getMonth() + 1, this.date = e.getDate(), this.hours = e.getHours(), this.day = e.getDay(), n.Adblock = !0;
      let t = !0;
      if (1 == n.ServerJSON.switch) {
        for (let e = 0; e < n.ServerJSON.timechoice.length; e++) {
          let i;
          switch (n.ServerJSON.timechoice[e]) {
            case 0:
              (t = this.getDatelock(n.ServerJSON.dateline)) && (t = !0, e = n.ServerJSON.timechoice.length - 1);
              break;
            case 1:
              (i = this.getTimelock(n.ServerJSON.Timeline)) && (t = i);
              break;
            case 2:
              (i = this.getWeeklock(n.ServerJSON.Weekline)) && (t = i);
              break;
            case 3:
              (t = this.getIplock(n.ServerJSON.Ipline)) && (t = !0, e = n.ServerJSON.timechoice.length - 1)
          }
        }
        n.Adblock = t
      } else 2 == n.ServerJSON.switch && (n.Adblock = !1);
      $.Jsb.init()
    }
    static getDatelock(e) {
      var t = !0;
      let i = this;
      return e.length <= 4 ? t = i.year <= e[0] && i.month <= e[1] && i.date <= e[2] && i.hours <= e[3] : e.length >= 8 && (t = i.year == e[0] && i.month == e[1] && i.date == e[2] ? !(i.hours >= e[3]) : i.year == e[4] && i.month == e[5] && i.date == e[6] ? !(i.hours <= e[7]) : i.year == e[0] && i.year == e[4] ? !(i.month == e[1] && i.date >= e[2] && i.date <= e[6]) && (!(i.month > e[1] && i.month < e[5]) && !(i.month > e[1] && i.month == e[5] && i.date <= e[6])) : i.year == e[0] ? !(i.month >= e[1] && i.date >= e[2]) : i.year != e[4] || !(i.month <= e[5] && i.date <= e[6])), t
    }
    static getTimelock(e) {
      var t = !0;
      let i = this,
        o = e.length;
      e % 2 != 0 && (o = e.length - 1);
      for (let n = 0; n < o; n += 2) i.hours >= e[n] && i.hours <= e[n + 1] && (t = !1, n = e.length);
      return t
    }
    static getWeeklock(e) {
      var t = !0;
      let i = this;
      for (let o = 0; o < e.length; o++) i.day == e[o] && (t = !1, o = e);
      return t
    }
    static getIplock(e) {
      var t = !0;
      let i = this;
      if (n.IpLock = !0, i.Ipsite) {
        t = !1;
        for (let o = 0; o < e.length; o++) i.Ipsite == e[o] && (n.IpLock = !0, t = !0, o = e)
      }
      return t
    }
  }
  g.kEpsilon = 1e-6;
  class m extends Laya.Script3D {
    constructor() {
      super()
    }
    onEnable() {
      this.Playts = this.owner.parent.getComponent(C), this.My = this.owner, this.Greenlight = this.Playts.Greenlight, this.Greenlight.active = !1
    }
    onTriggerEnter(e) {
      if (null == e.owner) return;
      if (null == e.owner.name) return;
      let t = e.owner.name;
      if ("Table1" == t || "Table2" == t || "Table3" == t || "Furniture" == t || "Furniture2" == t || "Furniture3" == t || "Chair" == t || "board" == t || "FlowerPot1" == t) {
        $.Jsb.playSound(n.SOUNDURL.PZ), x.shakeScreen();
        let t = e.owner;
        t.getComponent(Laya.PhysicsCollider).enabled = !1, t.getChildAt(0).active = !1;
        let i = t.getChildAt(1);
        i.active = !0;
        for (let e = 0; e < i.numChildren; e++) {
          let t, o = i.getChildAt(e),
            n = new Laya.BoxColliderShape(.5, .5, .5),
            a = o.getComponent(Laya.Rigidbody3D);
          (t = null == a ? o.addComponent(Laya.Rigidbody3D) : a).colliderShape = n, t.applyImpulse(new Laya.Vector3(4 * (Math.random() - .5), 4, 4 * (Math.random() - .5))), Laya.timer.frameOnce(80, this, () => {
            t.enabled = !1
          })
        }
        this.createMoney(t.transform.position)
      } else if ("Wallup" == t) x.shakeScreen(), this.owner.getComponent(Laya.Rigidbody3D).destroy(), this.Playts.passElevator();
      else if ("Box" == t) {
        x.shakeScreen(), $.Jsb.playSound(n.SOUNDURL.PZ);
        let t = e.owner;
        t.active = !0, t.getComponent(Laya.PhysicsCollider).enabled = !1;
        for (let e = 0; e < t.numChildren; e++) {
          let i = t.getChildAt(e),
            o = new Laya.BoxColliderShape(.5, .5, .5),
            n = i.addComponent(Laya.Rigidbody3D);
          n.colliderShape = o, n.applyImpulse(new Laya.Vector3(4 * (Math.random() - .5), 4, 4 * (Math.random() - .5))), Laya.timer.frameOnce(80, this, () => {
            n.enabled = !1
          })
        }
      } else if ("Money" == t) {
        x.shakeScreen(), $.Jsb.playSound(n.SOUNDURL.COIN);
        let t = e.owner,
          i = t.transform.position.clone();
        this.My.parent.addChild(t), t.transform.position = i, t.transform.setWorldLossyScale(new Laya.Vector3(55, 55, 10)), Laya.Tween.to(t.transform, {
          localPositionX: 0,
          localPositionZ: 0
        }, 800, Laya.Ease.backIn), t.getComponent(Laya.PhysicsCollider).destroy(), Laya.timer.clearAll(this.Greenlight), Laya.timer.once(810, this, () => {
          t.destroy(), this.Greenlight.active = !0, Laya.timer.frameOnce(30, this.Greenlight, () => {
            this.Greenlight.active = !1
          }), r.money += 2, q.updateMoney()
        })
      } else if ("KeyM" == t) x.shakeScreen(), this.Playts.Thekey.active = !0, e.owner.destroy(), $.Jsb.playSound(n.SOUNDURL.COIN);
      else if ("wallz" == t) {
        if (x.shakeScreen(), !this.Playts.Thekey.active) return;
        let t = e.owner.parent,
          i = t.getChildAt(1),
          o = t.getChildAt(2),
          n = t.getChildAt(3);
        Laya.Tween.to(i.transform, {
          localRotationEulerY: i.transform.localRotationEulerY - 170
        }, 700);
        let a = new Laya.BoxColliderShape(1, 1, 1),
          s = o.addComponent(Laya.Rigidbody3D);
        s.colliderShape = a, s.applyImpulse(new Laya.Vector3(4 * (Math.random() - .5), 4, 4 * (Math.random() - .5)));
        let r = new Laya.BoxColliderShape(1, 1, 1),
          h = n.addComponent(Laya.Rigidbody3D);
        h.colliderShape = r, h.applyImpulse(new Laya.Vector3(4 * (Math.random() - .5), 4, 4 * (Math.random() - .5))), Laya.timer.frameOnce(60, this, () => {
          o.destroy(), n.destroy(), i.destroy()
        }), t.getComponent(Laya.PhysicsCollider).enabled = !0, this.Playts.Thekey.active = !1
      }
    }
    createMoney(e) {
      let t = x.Money.clone();
      this.My.parent.addChild(t), t.transform.position = new Laya.Vector3(e.x, 1, e.z), t.transform.setWorldLossyScale(new Laya.Vector3(50, 50, 6)), Laya.Tween.to(t.transform, {
        localPositionX: 0,
        localPositionZ: 0
      }, 800, Laya.Ease.backIn), t.getComponent(Laya.PhysicsCollider).destroy(), Laya.timer.once(810, this, () => {
        t.destroy(), r.money += 2, q.updateMoney()
      })
    }
  }
  class u {
    init() {
      this.cusEvent = new Laya.EventDispatcher, AndroidToJs.setEventDispatcher(this.cusEvent)
    }
    RegistEvent(e, t, i) {
      this.cusEvent.on(e, t, i)
    }
    DispatchEvent(e, t) {
      this.cusEvent.event(e, t)
    }
    RemoveEvent(e, t, i) {
      this.cusEvent.off(e, t, i)
    }
  }
  u.Instance = new u;
  var y = u.Instance;
  class w {
    constructor() {
      this.curState = n.GAMESTATE.REAYD
    }
    gameInit() {
      r.totalLevel > 7 && (r.totalLevel = 0, x.totalLevel = 0), x.init(), x.reset();
      let e = new Laya.Sprite3D("GameLogic");
      e.addComponent(f), q.addSprite3D(e), x.nowHP = x.allHP = 100, this.playBGM(), this.initEvent()
    }
    initEvent() {
      y.RegistEvent("play_music", this, this.playBGM), y.RegistEvent("stop_music", this, this.stopBGM)
    }
    playBGM() {
      r.musicState && (console.log("播放背景音乐"), $.Jsb.playMusic(n.SOUNDURL.BGM))
    }
    stopBGM() {
      console.log("结束背景音乐1"), $.Jsb.stopMusic()
    }
    gameStart() {
      console.log("gameStart"), $.Jsb.recordVideo(), q.gameView.shut = !0, this.curState = n.GAMESTATE.PLAYING, q.gameView.showNative(), q.gameView.shutNative(), x.onRefreshLevel(), Laya.timer.once(2e3, this, () => {
        $.Jsb.showOppoBanner(!0)
      })
    }
    gameUpdate(e) {
      this.curState == n.GAMESTATE.PLAYING && x.update(e)
    }
    gameWin() {
      this.curState != n.GAMESTATE.LOSE && (x.totalLevel++, r.totalLevel = x.totalLevel, q.gameView.hideNative(), r.totalLevel > 7 && (r.bosslevel++, r.totalLevel = 0, r.bosslevel > 2 && (r.bosslevel = 0)), console.log("gameWin"), $.Jsb.playSound(n.SOUNDURL.WIN), $.Jsb.pauseRecord(), this.curState = n.GAMESTATE.WIN, r.SaveData(), q.removeMouseEvent(), q.openUI(n.UIVIEW.GAMEVIEW, !1), q.openUI(n.UIVIEW.WINVIEW), $.platform == J.TTMinGame && Laya.timer.once(500, this, () => {
        q.openUI(n.UIVIEW.SHAREVIEW)
      }), $.Jsb.AutoRecordVideo("pause", e => { }))
    }
    gameLose() {
      this.curState != n.GAMESTATE.WIN && (console.log("gameLose"), q.gameView.hideNative(), $.Jsb.playSound(n.SOUNDURL.LOSE), $.Jsb.pauseRecord(), this.curState = n.GAMESTATE.LOSE, q.removeMouseEvent(), q.openUI(n.UIVIEW.GAMEVIEW, !1), q.openUI(n.UIVIEW.LOSEVIEW))
    }
    gameRevive() {
      console.log("gameRevive"), $.Jsb.pauseRecord(), this.curState = n.GAMESTATE.REVIVE, q.removeMouseEvent(), q.openUI(n.UIVIEW.GAMEVIEW, !1), q.openUI(n.UIVIEW.REVIVEVIEW)
    }
    gameReset() {
      console.log("刷新游戏"), q.openUI(n.UIVIEW.ANIVIEW), this.curState = n.GAMESTATE.REAYD, x.xuetiao.value = x.nowHP / x.allHP, x.gameView.changeHPBar(x.nowHP / x.allHP, !1), x.Bossxuetiao.value = 1, x.reset()
    }
    resetGame() {
      console.log("重置游戲"), this.curState = n.GAMESTATE.REAYD, x.xuetiao.value = x.nowHP / x.allHP, x.gameView.changeHPBar(x.nowHP / x.allHP, !1), x.reset()
    }
    passReset() {
      console.log("免广告跳关"), x.totalLevel++, x.onRefreshLevel(), I.gameReset(), q.openUI(n.UIVIEW.MAINVIEW, !1)
    }
  }
  w.Instance = new w;
  class f extends Laya.Script3D {
    onUpdate() {
      I.gameUpdate(Laya.timer.delta / 1e3)
    }
  }
  var I = w.Instance;
  class v extends Laya.Script3D {
    constructor() {
      super(), this.hitResult = new Laya.HitResult, this.EnemyBehavior = 0, this.viewDistance = 7.5
    }
    onEnable() {
      this.My = this.owner, this.reddetection = this.My.getChildByName("xian01"), this.whitedetection = this.My.getChildByName("xian02"), this.reddetection.active = !1, this.whitedetection.active = !0, this.patrol1 = new Laya.Vector3(this.My.transform.localPositionX, this.My.transform.localPositionY, this.My.transform.localPositionZ), this.targetV3 = this.patrol1, this.question = this.My.getChildByName("wh"), this.exclamation = this.My.getChildByName("gth"), this.huohua = this.My.getChildByName("huohua"), this.dandao = this.My.getChildByName("dandao"), this.dandaoM = this.dandao.meshRenderer.sharedMaterial, this.huohua.active = !1, this.dandao.active = !1, this.question.active = !1, this.exclamation.active = !1, this.AnimatorControl = this.My.getComponent(Laya.Animator), this.onAnimationState("zhanli"), Laya.timer.frameLoop(25, this, this.Raydetection), Laya.timer.frameLoop(3, this, this.UpLoop), this.route = new Array, this.alarmState = !1, this.attackedEffects = this.My.getChildByName("Blast"), this.player = x.currentPlay.getComponent(C), this.My.getChildAt(8).skinnedMeshRenderer.sharedMaterial = x.EnemySkinNode.getChildAt(Math.floor(3 * Math.random())).meshRenderer.sharedMaterial
    }
    onDestroy() {
      Laya.timer.clearAll(this), Laya.timer.clearAll(this.onbehavior), Laya.Tween.clearAll(this.My.transform)
    }
    Raydetection() {
      if (this.player.flowerMesh.active && !this.lock) return;
      let e = new Laya.Vector3(this.My.transform.position.x, this.My.transform.position.y + 2, this.My.transform.position.z);
      this.playerObj.transform.position;
      if (q.scene3d.physicsSimulation.raycastFromTo(e, this.playerObj.transform.position, this.hitResult), null == this.hitResult.collider) return;
      let t = this.hitResult.collider.owner;
      null != t && ("Character" == t.name ? this.viewDistance < Laya.Vector3.distance(t.transform.position, this.My.transform.position) ? this.lock && this.disappear() : this.Calculate02(this.playerObj.transform.position, this.My.transform.position, this.whitedetection.transform.position) > 120 && (this.lock = !0, this.alarmState = !1, this.reddetection.active = !0, this.whitedetection.active = !1, this.patrol2 = this.positionWorld2local(this.playerObj.transform.position, this.My.parent), this.patrol1 = new Laya.Vector3(this.My.transform.localPositionX, this.My.transform.localPositionY, this.My.transform.localPositionZ), this.targetV3 = this.patrol2, Laya.timer.clearAll(this.onbehavior), this.onbehavior(3), this.exclamation.active = !0, this.question.active = !1) : this.lock && this.disappear())
    }
    onbehavior(e = 0) {
      let t = this.patrol1,
        i = this.patrol2,
        o = this.targetV3;
      if (null == i && 3 != e) return;
      let n = this.My;
      if (Laya.Tween.clearAll(n.transform), null != n && !this.alarmState) switch (e) {
        case 0:
          this.onAnimationState("xunshi"), Laya.timer.frameOnce(100, this, () => {
            this.onbehavior(1)
          });
          break;
        case 1:
          this.onAnimationState("zhanli"), Laya.timer.frameOnce(40, this, () => {
            let e = this.Calculate(n.transform.position, o);
            Laya.Tween.to(n.transform, {
              localRotationEulerY: e
            }, 800, null, Laya.Handler.create(this, () => {
              this.onbehavior(2), this.question.active = !1
            }))
          });
          break;
        case 2:
          this.onAnimationState("zou");
          let a = n.transform.localPositionX - o.x,
            s = n.transform.localPositionZ - o.z,
            r = Math.sqrt(a * a + s * s);
          Laya.Tween.to(n.transform, {
            localPositionX: o.x,
            localPositionZ: o.z
          }, 800 * r, null, Laya.Handler.create(this, () => {
            this.targetV3 == t ? this.targetV3 = i : this.targetV3 = t, this.onbehavior(0)
          }));
          break;
        case 3:
          if (!this.lock) return;
          if (this.onAnimationState("juqiang"), x.nowHP <= 0) return void (this.lock = !1);
          Laya.timer.frameOnce(20, this, () => {
            this.shooting()
          })
      }
    }
    shooting() {
      $.Jsb.playSound(n.SOUNDURL.SHOOT), this.dandao.active = !0, this.huohua.active = !0;
      let e = this.playerObj.transform.position,
        t = this.My.transform.position,
        i = t.x - e.x,
        o = t.z - e.z,
        a = Math.sqrt(i * i + o * o);
      this.dandao.transform.setWorldLossyScale(new Laya.Vector3(.02, .002 * a, .0025)), Laya.timer.frameLoop(3, this.huohua, () => {
        this.huohua.active = !this.huohua.active
      }), x.shakeScreen(), this.dandaoM.albedoColorA = .5, Laya.Tween.to(this.dandaoM, {
        albedoColorA: 0
      }, 200), Laya.timer.frameOnce(15, this, () => {
        Laya.timer.clearAll(this.huohua), this.dandao.active = !1, this.huohua.active = !1
      }), x.nowHP > 0 && (0 == r.bosslevel ? x.nowHP -= 8 : 1 == r.bosslevel ? x.nowHP -= 10 : 2 == r.bosslevel ? x.nowHP -= 12 : x.nowHP -= 8, this.player.changHp(x.nowHP))
    }
    UpLoop() {
      if (!this.lock) return;
      let e = this.Calculate(this.My.transform.position, this.playerObj.transform.position);
      this.My.transform.localRotationEulerY = e
    }
    disappear() {
      this.lock = !1, this.reddetection.active = !1, this.whitedetection.active = !0, this.exclamation.active = !1, this.question.active = !0, this.onbehavior(1)
    }
    onAnimationState(e, t = 1) {
      this.AnimatorControl.speed = t, this.AnimatorControl.crossFade(e, .1, 0)
    }
    OpenAlarm(e) {
      if (this.lock || !this.waypointsNode) return void (this.route = new Array);
      this.exclamation.active = !0;
      let t = this.waypointsNode,
        i = this.My.transform.position;
      if (0 == this.route.length) {
        let o, n = 0;
        for (let a = 0; a < t.numChildren; a++) {
          let s = t.getChildAt(a);
          q.scene3d.physicsSimulation.raycastFromTo(i, s.transform.position, this.hitResult), "Lu" == this.hitResult.collider.owner.name && (o ? Laya.Vector3.distance(o, e) > Laya.Vector3.distance(s.transform.position, e) && (n = a, o = s.transform.position) : (n = a, o = s.transform.position))
        }
        o || this.onbehavior(0);
        for (let e = n; e < t.numChildren && !(e == t.numChildren - 1 && Math.random() > .5); e++) {
          let i = new Laya.Vector3(t.getChildAt(e).transform.position.x, .3, t.getChildAt(e).transform.position.z);
          this.route.push(i)
        }
      }
      0 != this.route.length ? (Laya.Tween.clearAll(this.My.transform), Laya.timer.clearAll(this.onbehavior), this.onbehavior(10), this.alarmState = !0, this.My.transform.localRotationEulerY = this.Calculate(i, this.route[0]), this.onAnimationState("run1"), Laya.timer.frameLoop(1, this, this.onFup)) : this.onbehavior(0)
    }
    onFup() {
      if (!this.alarmState) return void Laya.timer.clearAll(this.onFup);
      let e = this.route[0],
        t = this.My.transform;
      t.localPositionX > e.x + .3 ? t.localPositionX -= .06 : t.localPositionX < e.x - .3 && (t.localPositionX += .06), t.localPositionZ > e.z + .3 ? t.localPositionZ -= .06 : t.localPositionZ < e.z - .3 && (t.localPositionZ += .06), this.My.transform.localRotationEulerY = this.Calculate(t.position, this.route[0]), Laya.Vector3.distance(t.position, new Laya.Vector3(e.x, .3, e.z)) < 1 && (this.route.shift(), this.route.length < 1 ? (this.patrol1 = e, this.alarmState = !1, this.exclamation.active = !1, this.onbehavior(0)) : 1 == this.route.length && (this.patrol2 = e, this.targetV3 = e))
    }
    onDie() {
      x.shakeScreen(), Laya.Tween.clearAll(this), Laya.Tween.clearAll(this.My.transform), Laya.timer.clearAll(this.onFup), Laya.timer.clearAll(this.huohua), Laya.timer.clearAll(this), this.patrol1 = this.patrol2 = null, this.lock = !1, this.My.transform.localRotationEulerY = this.Calculate(this.My.transform.position, this.playerObj.transform.position), this.onAnimationState("sw"), this.attackedEffects.active = !0, Laya.timer.once(500, this, () => {
        this.attackedEffects.active = !1
      }), this.huohua.destroy(), this.dandao.destroy(), this.reddetection.destroy(), this.whitedetection.destroy(), this.question.destroy(), this.exclamation.destroy();
      let e = this.My.getComponent(Laya.PhysicsCollider);
      null != e && e.destroy(), this.My.getComponent(v).destroy()
    }
    Calculate(e, t) {
      let i = new Laya.Vector3(0, 0, 0);
      Laya.Vector3.subtract(t, e, i);
      let o = 180 * Math.atan2(i.x, i.z) / Math.PI;
      return o = Math.round(o)
    }
    Calculate02(e, t, i) {
      let o = Laya.Vector3.distance(t, i),
        n = Laya.Vector3.distance(e, i),
        a = Laya.Vector3.distance(e, t),
        s = 180 * Math.acos((o * o + n * n - a * a) / (2 * o * n)) / Math.PI;
      return Math.floor(s)
    }
    positionWorld2local(e, t) {
      let i = new Laya.Vector3(0, 0, 0),
        o = new Laya.Matrix4x4;
      return t.transform.worldMatrix.invert(o), Laya.Vector3.transformCoordinate(e, o, i), i
    }
  }
  class b extends Laya.Script3D {
    constructor() {
      super()
    }
    onEnable() {
      this.My = this.owner, this.R3D = this.My.getComponent(Laya.Rigidbody3D), this.tuowei = this.My.getChildAt(0), Laya.Tween.to(this.tuowei.transform, {
        localScaleZ: 23.3,
        localPositionY: -26
      }, 1e3), this.player = x.currentPlay.getComponent(C)
    }
    fsZd() {
      Laya.Tween.to(this.owner.transform, {
        localPositionX: this.Mb.x,
        localPositionZ: this.Mb.z
      }, 4e3), Laya.timer.once(4010, this, () => {
        this.My.destroy()
      })
    }
    onTriggerEnter(e) {
      if (null == e.owner) return;
      if (null == e.owner.name) return;
      let t = e.owner.name;
      if ("Bullet" != t && "BOSS" != t && "Enemy" != t)
        if (Laya.Tween.clearAll(this.owner.transform), Laya.Tween.clearAll(this.tuowei.transform), this.R3D.destroy(), this.onBoom(), "Character" == t) x.nowHP > 0 && (x.nowHP -= 15, this.player.changHp(x.nowHP));
        else if ("Table1" == t || "Table2" == t || "Table3" == t || "Furniture" == t || "Furniture2" == t || "Furniture3" == t || "Chair" == t || "board" == t || "FlowerPot1" == t) {
          let t = e.owner;
          t.getComponent(Laya.PhysicsCollider).enabled = !1, t.getChildAt(0).active = !1;
          let i = t.getChildAt(1);
          i.active = !0;
          for (let e = 0; e < i.numChildren; e++) {
            let t, o = i.getChildAt(e),
              n = new Laya.BoxColliderShape(.5, .5, .5),
              a = o.getComponent(Laya.Rigidbody3D);
            (t = null == a ? o.addComponent(Laya.Rigidbody3D) : a).colliderShape = n, t.applyImpulse(new Laya.Vector3(4 * (Math.random() - .5), 4, 4 * (Math.random() - .5))), Laya.timer.frameOnce(80, this, () => {
              t.enabled = !1
            })
          }
        }
    }
    onBoom() {
      if (null == this.My) return;
      let e = this.Boom.clone();
      e.active = !0, this.My.parent.addChild(e), e.transform.position = this.My.transform.position, this.My.active = !1, Laya.timer.frameOnce(20, this, () => {
        this.My.destroy(), e.destroy()
      })
    }
    onDisable() {
      Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner.transform)
    }
  }
  class L extends Laya.Script {
    constructor() {
      super(), this.Attackinterval = 0, this.viewDistance = 9, this.hitResult = new Laya.HitResult, this.zuoyou = !1, this.state = !0, this.isRun = !1
    }
    onEnable() {
      this.My = this.owner, this.Luxian01 = this.My.parent.getChildByName("Ld01"), this.Luxian02 = this.My.parent.getChildByName("Ld02"), this.reddetection = this.My.getChildByName("xian01"), this.whitedetection = this.My.getChildByName("xian02"), this.redquan = this.My.getChildByName("targe"), this.bullet = this.My.parent.getChildByName("Bullet"), this.huohua = this.My.getChildByName("huohua"), this.zidRangeNode = this.My.getChildByName("ZIdan"), this.Boom = this.My.parent.getChildByName("huohua"), this.AnimatorControl = this.My.getComponent(Laya.Animator), this.huohua.active = !1, this.bullet.active = !1, this.Boom.active = !1, this.reddetection.active = !1, this.whitedetection.active = !0, this.logo = this.My.getChildByName("Bip001").getChildByName("Bip001 Pelvis").getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(1), this.logoTw = new Laya.TimeLine, this.logo.transform.localPositionX = .014, this.logoTw.to(this.logo.transform, {
        localPositionX: .01
      }, 1500).to(this.logo.transform, {
        localPositionX: .014
      }, 1500), this.logoTw.play(0, !0), this.redquanTw = new Laya.TimeLine, this.redquan.transform.localRotationEulerY = 0, this.redquanTw.to(this.redquan.transform, {
        localRotationEulerY: 720
      }, 1e4).to(this.redquan.transform, {
        localRotationEulerY: 0
      }, 1), this.redquanTw.play(0, !0), this.AnimatorControl.crossFade("juqiang", .1, 0), Laya.timer.frameLoop(20, this, this.Raydetection)
    }
    onUpdate() {
      if (!this.state) return;
      let e = this.My.transform;
      this.Attackinterval > 0 && this.Attackinterval--, e.localRotationEulerY > 50 ? this.zuoyou = !0 : e.localRotationEulerY < -50 && (this.zuoyou = !1), this.zuoyou ? e.localRotationEulerY-- : e.localRotationEulerY++
    }
    onDisable() { }
    Raydetection() {
      let e = new Laya.Vector3(this.My.transform.position.x, this.My.transform.position.y + 3, this.My.transform.position.z);
      this.player.transform.position;
      if (q.scene3d.physicsSimulation.raycastFromTo(e, this.player.transform.position, this.hitResult), null == this.hitResult.collider) return;
      let t = this.hitResult.collider.owner;
      if (null != t)
        if ("Character" == t.name) {
          if (this.viewDistance < Laya.Vector3.distance(t.transform.position, this.My.transform.position)) this.lock && this.disappear();
          else if (this.Calculate02(this.player.transform.position, this.My.transform.position, this.whitedetection.transform.position) > 140) {
            if (this.lock = !0, this.reddetection.active = !0, this.whitedetection.active = !1, this.Attackinterval > 0) return;
            this.onbehavior(1)
          }
        } else this.lock && this.disappear()
    }
    disappear() {
      this.lock = !1, this.reddetection.active = !1, this.whitedetection.active = !0
    }
    shooting() {
      this.huohua.active = !0, Laya.timer.frameOnce(5, this, () => {
        this.huohua.active = !1
      });
      let e, t = this.bullet.clone();
      this.My.parent.addChild(t), t.transform.position = this.huohua.transform.position, t.transform.localPositionY = 1.8, t.active = !0, 2 == r.bosslevel ? (e = this.zidRangeNode.getChildAt(2).transform.position, this.My.transform.localRotationEulerY = this.Calculate(this.My.transform.position, this.player.transform.position)) : e = this.zidRangeNode.getChildAt(this.bulletnu).transform.position, t.transform.localRotationEuler = new Laya.Vector3(90, this.Calculate(t.transform.position, e), 0);
      let i = t.addComponent(b);
      i.Boom = this.Boom, i.Mb = e, i.fsZd(), this.bulletnu--, this.bulletnu < 0 && (this.state = !0, this.Attackinterval = 100, Laya.timer.clearAll(this), this.huohua.active = !1, this.Raydetection(), Laya.timer.frameLoop(20, this, this.Raydetection))
    }
    onbehavior(e = 0) {
      switch (e) {
        case 0:
          this.AnimatorControl.crossFade("zhanli", .1, 0);
          break;
        case 1:
          this.bulletnu = 4, this.My.transform.localRotationEulerY = this.Calculate(this.My.transform.position, this.player.transform.position), Laya.timer.clearAll(this), this.state = !1, $.Jsb.playSound(n.SOUNDURL.SHOOT), 0 == r.bosslevel ? Laya.timer.frameLoop(20, this, this.shooting) : 2 == r.bosslevel ? Laya.timer.frameLoop(10, this, this.shooting) : Laya.timer.frameLoop(1, this, this.shooting);
          break;
        case 2:
          this.AnimatorControl.crossFade("run1", .1, 0)
      }
    }
    onStrike() {
      if (this.isRun) return;
      this.isRun = !0;
      let e = this.My.getComponent(Laya.PhysicsCollider);
      null != this.Luxian01 ? (null != e && (e.enabled = !1), this.AnimatorControl.crossFade("run1", .1, 0), this.Luxian01 && this.onRun(this.Luxian01), this.Luxian01 = null, this.changHp(60)) : null != this.Luxian02 ? (null != e && (e.enabled = !1), this.AnimatorControl.crossFade("run1", .1, 0), this.Luxian02 && this.onRun(this.Luxian02), this.Luxian02 = null, this.changHp(30)) : (this.AnimatorControl.crossFade("sw", .1, 0), this.changHp(0), Laya.Tween.clearAll(this), Laya.Tween.clearAll(this.My.transform), Laya.timer.clearAll(this.huohua), Laya.timer.clearAll(this), this.logoTw.pause(), this.redquanTw.pause(), this.huohua.destroy(), this.reddetection.destroy(), this.whitedetection.destroy(), null != e && e.destroy(), this.player.parent.getComponent(C).onWinBoss(), this.My.getComponent(L).destroy())
    }
    changHp(e) {
      e <= 0 && (e = 0), x.Bossxuetiao.value = e / x.bossAllHp
    }
    onRun(e) {
      if (e.numChildren < 1) return this.isRun = !1, e.destroy(), this.state = !0, this.AnimatorControl.crossFade("juqiang", .1, 0), this.My.transform.localRotationEulerY = 0, void (this.My.getComponent(Laya.PhysicsCollider).enabled = !0);
      this.state = !1;
      let t = e.getChildAt(0).transform.position;
      this.My.transform.localRotationEulerY = this.Calculate(this.My.transform.position, t), e.getChildAt(0).destroy(), Laya.Tween.to(this.My.transform, {
        localPositionX: t.x,
        localPositionZ: t.z
      }, 1e3, null, Laya.Handler.create(this, () => {
        null != e && e && this.onRun(e)
      }))
    }
    onDestroy() {
      Laya.timer.clearAll(this), Laya.Tween.clearAll(this.My.transform)
    }
    Calculate(e, t) {
      let i = new Laya.Vector3(0, 0, 0);
      Laya.Vector3.subtract(t, e, i);
      let o = 180 * Math.atan2(i.x, i.z) / Math.PI;
      return o = Math.round(o)
    }
    Calculate02(e, t, i) {
      let o = Laya.Vector3.distance(t, i),
        n = Laya.Vector3.distance(e, i),
        a = Laya.Vector3.distance(e, t),
        s = 180 * Math.acos((o * o + n * n - a * a) / (2 * o * n)) / Math.PI;
      return Math.floor(s)
    }
  }
  class C extends Laya.Script3D {
    constructor() {
      super(), this.dir = new Laya.Vector3(0, 0, 0), this.attackTarget = new Laya.Vector3(0, 0, 0), this.dirx = 0, this.diry = 0
    }
    onEnable() {
      this.My = this.owner, this.ontimerBox(), this.player = this.My.getChildByName("Character"), this.Camera = this.My.getChildByName("MainCamera"), this.Greenlight = this.My.getChildByName("glitter"), this.Thekey = this.My.getChildByName("KeyM"), this.Thekey.active = !1, this.Camera.transform.localPosition = new Laya.Vector3(.007333342, .55, .239), this.player.getComponent(m) ? this.player.getComponent(m).destory() : this.player.addComponent(m), this.player.getComponent(m).collisionGroup = 3, this.playerAni = this.player.getComponent(Laya.Animator), this.playerAni.play("xunshi"), this.player.active = !0, this.playerAni.getControllerLayer().getAnimatorState("zhanli").clip.islooping = !0, this.playerAni.getControllerLayer().getAnimatorState("run").clipStart = 0, this.playerAni.getControllerLayer().getAnimatorState("run").clipEnd = .125, this.playerAni.getControllerLayer().getAnimatorState("run").clip.islooping = !0, this.playerAni.getControllerLayer().getAnimatorState("huijian").clipStart = 0, this.playerAni.getControllerLayer().getAnimatorState("huijian").clipEnd = 50 / 120, this.playerAni.getControllerLayer().getAnimatorState("huijian").speed = 2, this.playerAni.getControllerLayer().getAnimatorState("feibiao").speed = 1.8, this.playerAni.getControllerLayer().getAnimatorState("feibiao").clipStart = .125, this.playerAni.getControllerLayer().getAnimatorState("feibiao").clipEnd = 50 / 120, this.Blast = this.My.getChildByName("Blast"), this.flowerMesh = this.My.getChildByName("flower"), this.huohua = this.player.getChildByName("huohua"), this.dandao = this.My.getChildByName("dandao"), this.dandaoM = this.dandao.meshRenderer.sharedMaterial, this.dartMesh = this.player.getChildByName("Shuriken"), this.dartMesh2 = this.My.getChildByName("Shuriken"), this.dartMesh2.active = !1, this.huohua.active = !1, this.dandao.active = !1, this.Elevator = this.My.parent.getChildByName("wall").getChildAt(0), this.Door = this.Elevator.getChildByName("Door"), this.ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, -2, 0)), this.hitResult = new Laya.HitResult, this.moveRay = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, -2, 0)), this.moveHitResult = new Laya.HitResult, this.moveRay = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, -2, 0)), this.moveHitResult = new Laya.HitResult, this.attackRay = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, -2, 0)), this.attackHitResult = new Laya.HitResult, this.showFlower(!1), this.player.getChildAt(4).skinnedMeshRenderer.sharedMaterial = x.skinNode.getChildAt(r.Currentskin).meshRenderer.sharedMaterial, this.weaponNode = this.player.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0), this.knifeMesh = this.player.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0), this.akMesh = this.player.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(1), this.gunMesh = this.player.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(2), this.gunsMesh = this.player.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(3), this.dartsMesh = this.player.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(4), this.dartsMesh.transform.localScale = new Laya.Vector3(.0025, .0025, .0025), this.colliderShapeSize(x.weaponType), this.changeWeapon(), x.isMove = !1, Laya.timer.frameLoop(5, this, this.attackOnRay), this.Mysteep = x.playsteep, this.trumpHair = this.player.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0), 6 == r.Currentskin ? this.trumpHair.active = !0 : this.trumpHair.active = !1, Laya.timer.loop(10, this, this.onUpdates)
    }
    ontimerBox() {
      this.box_mouse = x.box_mouse, null == this.box_mouse ? Laya.timer.once(2e3, this, this.ontimerBox) : (this.onMouse(), this.statrElevator = this.My.parent.getChildByName("elevator"), this.statrElevator && this.startAnimation())
    }
    onUpdates() {
      if (1 == x.isAttcak && x.AttcackTarget ? this.player.transform.localRotationEulerY = g.Calculate(x.AttcackTarget.transform.position, this.player.transform.position) - 180 : this.player.transform.localRotationEulerY = 360 - (x.rockRotate + 180), x.isMove && !x.isAttcak) {
        let e = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.add(this.player.transform.position, new Laya.Vector3(x.rockerX / 1e3, 2, x.rockerY / 1e3), e), this.ray.origin = e, q.scene3d.physicsSimulation.rayCast(this.ray, this.hitResult, 5, 3, 2);
        let t = new Laya.Vector3(x.rockerX / (1e3 - this.Mysteep), 0, x.rockerY / (1e3 - this.Mysteep)),
          i = new Laya.Vector3(0, 0, 0);
        if (Laya.Vector3.add(this.player.transform.position, new Laya.Vector3(x.rockerX / 1e3, 1, x.rockerY / 1e3), i), this.moveRay.origin = i, this.moveRay.direction = t.clone(), q.scene3d.physicsSimulation.rayCast(this.moveRay, this.moveHitResult, .1, 3, 2), 1 != this.hitResult.succeeded || this.moveHitResult.succeeded) {
          let e = new Laya.Vector3(0, 0, 0);
          Laya.Vector3.add(this.player.transform.position, new Laya.Vector3(x.rockerX / 1e3, 2, 0), e), this.ray.origin = e, q.scene3d.physicsSimulation.rayCast(this.ray, this.hitResult, 5, 3, 2);
          let t = new Laya.Vector3(x.rockerX / 1e3, 0, 0),
            i = new Laya.Vector3(0, 0, 0);
          if (Laya.Vector3.add(this.player.transform.position, new Laya.Vector3(x.rockerX / 1e3, 1, 0), i), this.moveRay.origin = i, this.moveRay.direction = t.clone(), q.scene3d.physicsSimulation.rayCast(this.moveRay, this.moveHitResult, .1, 3, 2), this.hitResult.succeeded && !this.moveHitResult.succeeded) this.playerAni.play("run"), this.My.transform.translate(t, !1);
          else {
            let e = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(this.player.transform.position, new Laya.Vector3(0, 2, x.rockerY / 1e3), e), this.ray.origin = e, q.scene3d.physicsSimulation.rayCast(this.ray, this.hitResult, 5, 3, 2);
            let t = new Laya.Vector3(0, 0, x.rockerY / 1e3),
              i = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(this.player.transform.position, new Laya.Vector3(0, 1, x.rockerY / 1e3), i), this.moveRay.origin = i, this.moveRay.direction = t.clone(), q.scene3d.physicsSimulation.rayCast(this.moveRay, this.moveHitResult, .1, 3, 2), this.hitResult.succeeded && !this.moveHitResult.succeeded ? (this.playerAni.play("run"), this.My.transform.translate(t, !1)) : (x.rockerX = x.rockerY = 0, this.playerAni.play("xunshi"), this.playerAni.getCurrentAnimatorPlayState().normalizedTime >= 1 && this.playerAni.play("zhanli"), this.My.transform.translate(new Laya.Vector3(0, 0, 0), !1))
          }
        } else this.playerAni.play("run"), this.My.transform.translate(t, !1)
      } else x.isMove || x.isAttcak || (x.rockerX = x.rockerY = 0, this.playerAni.play("zhanli"), this.My.transform.translate(new Laya.Vector3(0, 0, 0), !1))
    }
    attackOnRay() {
      if (!(x.nowHP <= 0) && this.My && 1 == this.player.active) {
        let e = new Laya.Vector3(0, 0, 0),
          t = new Laya.Vector3(0, 0, 0);
        0 != x.rockerX && (this.dirx = x.rockerX / 1e3), 0 != x.rockerY && (this.diry = x.rockerY / 1e3);
        let i = new Laya.Vector3(this.dirx, 0, this.diry);
        Laya.timer.delta;
        if (Laya.Vector3.add(this.My.transform.position, new Laya.Vector3(t.x, 2, t.z), e), this.attackRay.origin = e, this.attackRay.direction = i, q.scene3d.physicsSimulation.rayCast(this.attackRay, this.attackHitResult, 3, 3, 4), null == this.attackHitResult.collider) return;
        let o = this.attackHitResult.collider.owner;
        if (null == o) return;
        let n = g.getVec3Dis(o.transform.localPosition, this.My.transform.localPosition);
        if (this.attackHitResult.succeeded && o)
          if (1 == x.weaponType && n <= 2 || (3 == x.weaponType || 4 == x.weaponType) && n <= 5 || (2 == x.weaponType || 5 == x.weaponType) && n <= 5.5) {
            if ("Walls" == o.name) return o = null, void (x.AttcackTarget = null);
            if ("Enemy" == o.name) {
              x.AttcackTarget = o, x.isAttcak = !0, this.playAction();
              let e = o.getComponent(v);
              null != e && e.onDie(), o = null, x.AttcackTarget = null
            } else if ("BOSS" == o.name) {
              let e = o.getComponent(L);
              null != e && (x.AttcackTarget = o, x.isAttcak = !0, this.playAction(), e.onStrike())
            }
          } else o = null, x.AttcackTarget = null;
        else o = null, x.AttcackTarget = null
      }
    }
    gunShoot() {
      if (!x.isAttcak || null == x.AttcackTarget || x.nowHP <= 0) return;
      let e = x.AttcackTarget.transform.position,
        t = this.player.transform.position;
      new Laya.Vector3(0, 0, 0);
      this.dandao.active = !0, this.huohua.active = !0, this.dandao.transform.localRotationEulerZ = g.Calculate(this.dandao.transform.position, e);
      let i = t.x - e.x,
        o = t.z - e.z,
        n = Math.sqrt(i * i + o * o);
      this.dandao.transform.setWorldLossyScale(new Laya.Vector3(.02, .002 * n, .0025)), this.dandaoM.albedoColorA = .5, Laya.Tween.to(this.dandaoM, {
        albedoColorA: 0
      }, 200), Laya.timer.frameLoop(3, this.huohua, () => {
        this.huohua.active = !this.huohua.active
      }), Laya.timer.frameOnce(15, this, () => {
        Laya.timer.clearAll(this.huohua), this.dandao.active = !1, this.huohua.active = !1
      })
    }
    dartsShoot() {
      if (!x.isAttcak || null == x.AttcackTarget) return;
      let e = x.AttcackTarget.transform.position,
        t = this.My.transform.position,
        i = t.x - e.x,
        o = t.z - e.z,
        n = Math.sqrt(i * i + o * o);
      this.dandao.transform.setWorldLossyScale(new Laya.Vector3(.02, .002 * n, .0025)), this.dandaoM.albedoColorA = .5, Laya.Tween.to(this.dandaoM, {
        albedoColorA: 0
      }, 200), this.dandao.active = !0, this.dandao.transform.localRotationEulerZ = g.Calculate(this.dandao.transform.position, e);
      Laya.timer.delta;
      let a = this.dartMesh2.clone();
      a.active = !0, this.My.addChild(a), a.transform.localPosition = this.changePos(a), a.transform.localPositionY = .4, q.addSprite3D(a), a.transform.localScale = new Laya.Vector3(.35, .35, .35);
      let s = new Laya.Vector3(0, 0, 0);
      Laya.Vector3.subtract(x.AttcackTarget.transform.position, this.My.transform.position, s), a.transform.translate(s, !1), Laya.timer.once(1e3, this.weaponNode, () => {
        Laya.Tween.clearAll(this.dandaoM), this.dandao.active = !1, a.active = !1
      })
    }
    changePos(e) {
      let t = e.parent,
        i = new Laya.Vector3(e.transform.localPosition.x * t.transform.localScale.x, e.transform.localPosition.y * t.transform.localScale.y, e.transform.localPosition.z * t.transform.localScale.z),
        o = g.quaternioneToEular(t.transform.rotation),
        n = new Laya.Vector3(o.x * i.x, o.y * i.y, o.z * i.z);
      return new Laya.Vector3(t.transform.localPositionX + n.x, t.transform.localPositionY + n.y, t.transform.localPositionZ + n.z)
    }
    colliderShapeSize(e) { }
    playAction() {
      switch (this.cameraShake(), x.shakeScreen(), x.weaponType) {
        case 1:
          $.Jsb.playSound(n.SOUNDURL.SWORD), this.playerAni.play("huijian"), Laya.timer.once(500, this.playerAni, () => {
            x.isAttcak = !1
          });
          break;
        case 2:
        case 3:
        case 4:
          $.Jsb.playSound(n.SOUNDURL.SHOOT), this.gunShoot(), this.playerAni.play("juqiang"), Laya.timer.once(500, this.playerAni, () => {
            x.isAttcak = !1
          });
          break;
        case 5:
          $.Jsb.playSound(n.SOUNDURL.SWORD), this.dartsShoot(), this.playerAni.play("feibiao"), Laya.timer.once(500, this.playerAni, () => {
            x.isAttcak = !1
          })
      }
    }
    cameraShake() {
      this.Camera.transform.localPositionX = .0173333, Laya.timer.once(50, this.Camera, () => {
        this.Camera.transform.localPositionX = .0073333
      })
    }
    changHp(e) {
      x.shakeScreen(), e <= 0 && (e = 0), x.gameView.changeHPBar(e / x.allHP, !0), 0 == e && (this.playerAni.crossFade("sw", .1, 0), this.offMouse(), x.gameView.removeMouseEvent(), this.player.getComponent(Laya.PhysicsCollider) && this.player.getComponent(Laya.PhysicsCollider).destory(), I.gameLose()), this.Blast.active = !0, Laya.timer.once(800, this, () => {
        this.Blast.active = !1
      })
    }
    showFlower(e) {
      x.isHide ? (this.flowerMesh.active = e, this.player.active = !e) : this.flowerMesh.active = !1
    }
    onAnimationState(e, t = 1) {
      this.playerAni.speed = t, this.playerAni.crossFade(e, .1, 0)
    }
    changeWeapon() {
      if (this.weaponNode.numChildren > 0)
        for (let e = 0; e < this.weaponNode.numChildren; e++) this.weaponNode.getChildAt(e).active = !1;
      switch (x.weaponType) {
        case 1:
          this.knifeMesh.active = !0;
          break;
        case 2:
          this.akMesh.active = !0;
          break;
        case 3:
          this.gunMesh.active = !0;
          break;
        case 4:
          this.gunsMesh.active = !0;
          break;
        case 5:
          this.dartsMesh.active = !0
      }
    }
    onDown(e) {
      this.DownX = e.stageX, this.DownY = e.stageY
    }
    onMove(e) {
      this.showFlower(!1)
    }
    onUp(e) {
      this.showFlower(!0)
    }
    passElevator() {
      this.offMouse(), x.gameView.removeMouseEvent(), I.gameWin();
      let e = this.Door.getChildAt(0),
        t = this.Door.getChildAt(1);
      Laya.Tween.to(this.My.transform, {
        localPositionX: this.Elevator.transform.localPositionX
      }, 500, null, Laya.Handler.create(this, () => {
        Laya.Tween.to(this.player.transform, {
          localPositionZ: this.player.transform.localPositionZ - .15
        }, 500)
      })), Laya.Tween.to(e.transform, {
        localPositionX: -2
      }, 500), Laya.Tween.to(t.transform, {
        localPositionX: 2
      }, 500)
    }
    startAnimation() {
      this.statrElevator.getChildByName("dianti");
      let e = this.statrElevator.getChildByName("Door").getChildAt(0),
        t = this.statrElevator.getChildByName("Door").getChildAt(1);
      Laya.Tween.to(e.transform, {
        localPositionX: -3
      }, 600), Laya.Tween.to(t.transform, {
        localPositionX: 3
      }, 600)
    }
    onWinBoss() {
      x.gameView.removeMouseEvent();
      let e = x.gameView.LevelsX;
      e.visible = !0;
      let t = e.getChildByName("txk").getChildByName("xx");
      t.scaleX = 5, t.scaleY = 5, t.visible = !0, Laya.Tween.to(t, {
        scaleX: 1,
        scaleY: 1
      }, 800, Laya.Ease.bounceOut), x.nowHP = 100, x.allHP = 100, x.gameView.changeHPBar(1, !1), I.gameWin()
    }
    onDisable() {
      Laya.Tween.clearAll(this.player.transform), Laya.Tween.clearAll(this.My.transform), Laya.Tween.clearAll(this.dandaoM), Laya.Tween.clearAll(this)
    }
    onMouse() {
      this.box_mouse.on(Laya.Event.MOUSE_DOWN, this, this.onDown), this.box_mouse.on(Laya.Event.MOUSE_MOVE, this, this.onMove), this.box_mouse.on(Laya.Event.MOUSE_UP, this, this.onUp)
    }
    offMouse() {
      this.box_mouse.off(Laya.Event.MOUSE_DOWN, this, this.onDown), this.box_mouse.off(Laya.Event.MOUSE_MOVE, this, this.onMove), this.box_mouse.off(Laya.Event.MOUSE_UP, this, this.onUp)
    }
  }
  class k extends Laya.Script {
    constructor() {
      super(), this.hitResult = new Laya.HitResult, this.alarm = !1
    }
    onEnable() {
      this.My = this.owner, this.Warning = this.My.getChildAt(0), this.lightx = this.My.getChildAt(2), this.lightxred = this.My.getChildAt(3), this.lampMon = this.My.getChildAt(4), this.lampMonred = this.My.getChildAt(5), this.lampMonred.active = !1, this.lightxred.active = !1, this.alarm = !1, this.MonitorTimeLine(), Laya.timer.frameLoop(20, this, this.onRy)
    }
    MonitorTimeLine() {
      this.ShakeMonitor = new Laya.TimeLine;
      let e = this.My.transform.localRotationEulerY;
      this.ShakeMonitor.to(this.My.transform, {
        localRotationEulerY: e - 100
      }, 4e3).to(this.My.transform, {
        localRotationEulerY: e
      }, 4e3), this.ShakeMonitor.play(0, !0)
    }
    onRy() {
      let e = this.My.transform.position,
        t = this.player.transform.position;
      q.scene3d.physicsSimulation.raycastFromTo(e, t, this.hitResult);
      let i = this.hitResult.collider.owner;
      null != this.hitResult.collider && null != i && "Character" == i.name && Laya.Vector3.distance(this.lampMon.transform.position, t) < 1.8 && (this.lightxred.active = !0, this.lightx.active = !1, this.lampMonred.active = !0, this.lampMon.active = !1, Laya.timer.clearAll(this), this.ShakeMonitor.pause(), this.ShakeMonitor.destroy(), this.ShakeMonitor = new Laya.TimeLine, this.ShakeMonitor.to(this.Warning.meshRenderer.sharedMaterial, {
        albedoColorA: 0
      }, 500).to(this.Warning.meshRenderer.sharedMaterial, {
        albedoColorA: 1
      }, 500), this.ShakeMonitor.play(0, !0), this.callEnemy())
    }
    callEnemy() {
      if (this.direnNode)
        for (let e = 0; e < this.direnNode.numChildren; e++) {
          let t = this.direnNode.getChildAt(e).getComponent(v);
          null != t && t.OpenAlarm(this.My.transform.position)
        }
    }
    onDisable() { }
  }
  class A {
    constructor() {
      this.allHP = 100, this.nowHP = 100, this.bossAllHp = 90, this.isHide = !1, this.weaponType = 1, this.rockerX = 0, this.rockerY = 0, this.rockRotate = 0, this.playcollRoate = 0, this.playsteep = 0, this.isMove = !1, this.isAttcak = !1, this.totalLevel = 0
    }
    init() {
      this.Gamepreset = Laya.loader.getRes("game/Conventional/SampleScene.lh"), this.allguanNode = this.Gamepreset.getChildByName("GameGuan"), this.PlayObject = this.Gamepreset.getChildByName("Character"), this.Player = this.PlayObject.getChildByName("Character"), this.MainCamera = this.PlayObject.getChildByName("MainCamera"), this.fbMesh = this.PlayObject.getChildByName("feibiao"), this.Enemy = this.Gamepreset.getChildByName("Enemy"), this.alldecorationNode = this.Gamepreset.getChildByName("inprops"), this.skinNode = this.allguanNode.getChildByName("SkinScene").getChildByName("SkinCube"), this.wallMater = this.allguanNode.getChildAt(0).getChildByName("wall").getChildByName("Wall").meshRenderer.sharedMaterial, this.EnemySkinNode = this.Gamepreset.getChildByName("Eskin"), this.Money = this.Gamepreset.getChildByName("Money"), r.ReadData(), this.totalLevel = r.totalLevel, this.totalLevel > 7 && (r.totalLevel = 0, this.totalLevel = 0), this.oninitGame()
    }
    oninitGame() {
      this.allHP = 100, this.nowHP = 100, null == this.gameView ? Laya.timer.frameOnce(60, this, this.oninitGame) : (this.isHide = !1, n.guanData[Math.floor(3 * Math.random()) + 3] = 2, null != this.gameView && this.gameView.oncheckpointUi(), this.weaponType = 1, this.totalLevel = 0)
    }
    onRefreshLevel() {
      let e = this.gameView.LevelsX,
        t = this.gameView.LevelsX;
      t.visible = !0, t.scaleX = 1.5, t.scaleY = 1.5, t.centerY = -260, Laya.timer.frameOnce(50, this, () => {
        Laya.Tween.to(t, {
          scaleX: 1,
          scaleY: 1,
          centerY: -400
        }, 1e3, Laya.Ease.bounceOut)
      });
      for (let t = 0; t < n.guanData.length; t++) t < this.totalLevel ? e.getChildAt(t).getChildAt(0).visible = !0 : e.getChildAt(t).getChildAt(0).visible = !1;
      2 == n.guanData[this.totalLevel] ? this.gameView.onshowReward(!0) : this.gameView.onshowReward(!1), Laya.timer.frameOnce(300, this, () => {
        this.gameView.LevelsX.visible = !1
      })
    }
    update(e) { }
    onskinScena() {
      null != this.currentGuan && (this.currentGuan.destroy(), this.currentGuan = null), this.currentGuan = this.allguanNode.getChildByName("SkinScene").clone(), this.currentGuan.active = !0, this.playerSkin = this.currentGuan.getChildByName("Character").getChildAt(2), this.chooseSkin(0), q.addSprite3D(this.currentGuan)
    }
    chooseSkin(e = 0) {
      let t = this.currentGuan.getChildByName("SkinCube");
      if (null == t) return;
      this.playerSkin.skinnedMeshRenderer.sharedMaterial = t.getChildAt(e).meshRenderer.sharedMaterial;
      let i = this.playerSkin.parent.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0);
      i.active = 6 == e
    }
    chooseWeapons(e = 0) {
      let t = this.playerSkin.parent.getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0),
        i = this.playerSkin.parent.getComponent(Laya.Animator);
      for (let o = 0; o < t.numChildren; o++) {
        let n = t.getChildAt(o);
        o == e ? (n.active = !0, i.crossFade("huijian", .1, 0)) : n.active = !1
      }
    }
    reset() {
      if (this.wallMater.albedoColor = n.wallData[Math.floor(Math.random() * n.wallData.length)], this.totalLevel > 7 && (this.oninitGame(), this.onRefreshLevel()), null != this.gameView ? (this.gameView.registMouseEvent(), this.gameView.initGameInfo()) : 2 == n.guanData[this.totalLevel] && (this.totalLevel = 0, this.reset()), null != this.currentGuan && (this.currentGuan.destroy(), this.currentGuan = null), 1 == n.guanData[this.totalLevel]) {
        let e = this.totalLevel;
        1 == r.bosslevel ? e += 9 : r.bosslevel > 1 && (e += 16), this.currentGuan = this.allguanNode.getChildAt(e).clone()
      } else 2 == n.guanData[this.totalLevel] ? this.currentGuan = this.allguanNode.getChildByName("store").clone() : 1 == r.bosslevel ? this.currentGuan = this.allguanNode.getChildByName("boss02").clone() : r.bosslevel > 1 ? this.currentGuan = this.allguanNode.getChildByName("boss03").clone() : this.currentGuan = this.allguanNode.getChildByName("boss").clone();
      this.currentGuan.active = !0, this.controlLevel(this.currentGuan), q.addSprite3D(this.currentGuan), this.scanPlay()
    }
    controlLevel(e) {
      if (null != e && e.numChildren > 0)
        for (let t = 0; t < e.numChildren; t++) {
          let i = e.getChildAt(t),
            o = i.name;
          if ("road" == (o = o.replace(/\([^\)]*\)/g, "").trim()) && i.numChildren > 0)
            for (let e = 0; e < i.numChildren; e++) {
              let t = i.getChildAt(e),
                o = t.name,
                n = t.getComponent(Laya.PhysicsCollider);
              n.collisionGroup = 2, n.canCollideWith = 1, "road02" == o && (n.enabled = !1)
            }
          if ("wall" == o && i.numChildren > 0)
            for (let e = 0; e < i.numChildren; e++) {
              let t = i.getChildAt(e);
              "Walls" == t.name && (t.getComponent(Laya.PhysicsCollider).collisionGroup = 4, t.getComponent(Laya.PhysicsCollider).canCollideWith = 1)
            }
        }
    }
    scanPlay() {
      q.scene3d.fogColor = n.fogData[Math.floor(Math.random() * n.fogData.length)];
      let e = this.currentGuan.getChildByName("damage"),
        t = this.currentGuan.getChildByName("enemy"),
        i = this.currentGuan.getChildByName("pathfinding");
      this.currentPlay = this.PlayObject.clone();
      let o = this.currentGuan.getChildByName("Character");
      this.currentGuan.addChild(this.currentPlay), this.currentPlay.transform.localPosition = o.transform.localPosition, o.destroy(), this.currentGuan.getChildByName("Character").getChildAt(2).getChildAt(4).skinnedMeshRenderer.sharedMaterial = this.skinNode.getChildAt(r.Currentskin).meshRenderer.sharedMaterial;
      let a = this.currentPlay.getChildByName("Character").getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0);
      for (let e = 0; e < a.numChildren; e++) e == r.Currentweapons ? a.getChildAt(e).active = !0 : a.getChildAt(e).active = !1;
      if (2 != n.guanData[this.totalLevel]) this.currentPlay.addComponent(C);
      else {
        this.currentGuan.getChildByName("Character").getChildByName("KeyM").active = !1;
        let e = this.currentPlay.getChildByName("Character").getChildByName("Bip001").getChildAt(1).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0);
        6 == r.Currentskin ? e.active = !0 : e.active = !1
      }
      if (null != e)
        for (let t = 0; t < e.numChildren; t++) {
          let t = e.getChildAt(0),
            i = this.alldecorationNode.getChildAt(Math.floor(Math.random() * this.alldecorationNode.numChildren)).clone();
          e.addChild(i), i.transform.localPosition = t.transform.localPosition, i.transform.localRotationEuler = t.transform.localRotationEuler, t.destroy()
        }
      if (null != t) {
        for (let e = 0; e < t.numChildren; e++) {
          let o = t.getChildAt(e);
          if ("e" != o.name) break;
          let n = this.Enemy.clone();
          if (t.addChild(n), n.transform.localPosition = o.transform.localPosition, n.transform.localRotationEuler = o.transform.localRotationEuler, n.addComponent(v), n.getComponent(v).playerObj = this.currentPlay.getChildAt(1), null == n.getComponent(Laya.PhysicsCollider)) {
            let e = n.addComponent(Laya.PhysicsCollider);
            e.colliderShape = new Laya.BoxColliderShape(.01, .04, .01), e.isTrigger = !0, e.collisionGroup = 4, e.canCollideWith = 1
          } else {
            let e = n.getComponent(Laya.PhysicsCollider);
            e.isTrigger = !0, e.collisionGroup = 4, e.canCollideWith = 1
          }
          if (e != t.numChildren) {
            let o = t.getChildAt(e + 1);
            "e1" == o.name && (n.getComponent(v).waypointsNode = i, n.getComponent(v).patrol2 = o.transform.localPosition, o.destroy(), e--)
          }
          n.getComponent(v).onbehavior(0), o.destroy()
        }
        this.changeEnemySize()
      }
      let s = this.currentGuan.getChildByName("monitoring");
      if (null != s)
        for (let e = 0; e < s.numChildren; e++) {
          let i = s.getChildAt(e);
          i.addComponent(k), i.getComponent(k).player = this.currentPlay.getChildAt(1), i.getComponent(k).direnNode = t
        }
      let h = this.currentGuan.getChildByName("BOSS");
      if (null != h) {
        let e = h.getChildByName("BOSS");
        e.addComponent(L), e.getComponent(L).player = this.currentPlay.getChildAt(1);
        let t = e.getComponent(Laya.PhysicsCollider);
        t.collisionGroup = 4, t.canCollideWith = 1, 1 == this.weaponType ? t.colliderShape = new Laya.BoxColliderShape(.01, .04, .01) : 3 == this.weaponType || 4 == this.weaponType ? t.colliderShape = new Laya.BoxColliderShape(.025, .04, .025) : 5 != this.weaponType && 2 != this.weaponType || (t.colliderShape = new Laya.BoxColliderShape(.03, .04, .03))
      }
    }
    changeEnemySize() {
      let e = this.currentGuan.getChildByName("enemy");
      if (e.numChildren > 0)
        for (let t = 0; t < e.numChildren; t++) {
          let i = e.getChildAt(t);
          if (null == i.getComponent(Laya.PhysicsCollider)) return;
          let o = i.getComponent(Laya.PhysicsCollider);
          1 == this.weaponType ? o.colliderShape = new Laya.BoxColliderShape(.01, .04, .01) : 3 == this.weaponType || 4 == this.weaponType ? o.colliderShape = new Laya.BoxColliderShape(.02, .04, .02) : 5 != this.weaponType && 2 != this.weaponType || (o.colliderShape = new Laya.BoxColliderShape(.025, .04, .025)), o.isTrigger = !0, o.collisionGroup = 4, o.canCollideWith = 1
        }
    }
    changecamera(e, t) {
      let i = new Laya.Vector3(0, 0, 0);
      return this.MainCamera.viewport.project(e.transform.position, this.MainCamera.projectionViewMatrix, i), t.pos(i.x / Laya.stage.clientScaleX, i.y / Laya.stage.clientScaleY), t
    }
    shakeScreen() {
      n.isShakeOn && $.Jsb.openVibrateShort()
    }
  }
  A.Instance = new A;
  var x = A.Instance;
  class S extends e.MainViewUI {
    constructor() {
      super(), this.isshow = !1, this.a = !0, this.guideHandrisUp = !0, this.guideHandX = 0, this.guideHandY = 0, this.guideHandAngle = 0, this.gameImage = null, this.offonbl = !0, this.nodeArr = []
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons(), $.Jsb.createMoreGameBtn()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, null != x.currentPlay.getComponent(C) && (this.player = x.currentPlay.getComponent(C)), 2 == n.guanData[x.totalLevel] || "store" == x.currentGuan.name ? this.img_wuqi.visible = !1 : this.img_wuqi.visible = !0, this.initExchange(), $.platform == J.OppoMinGame ? (this.oppo_mg_btn.visible = !0, this.oppo_mg_btn.on(Laya.Event.CLICK, this, () => {
        $.Jsb.showGongge()
      })) : $.platform == J.QQMinGame ? (this.oppo_mg_btn.visible = !0, this.oppo_mg_btn.on(Laya.Event.CLICK, this, () => {
        $.Jsb.showQQBox()
      })) : $.platform == J.WXMinGame ? (this.oppo_mg_btn.visible = !0, this.oppo_mg_btn.on(Laya.Event.CLICK, this, () => {
        this.isshow = !this.isshow, $.Jsb.showwxBox(this.isshow)
      })) : this.oppo_mg_btn.visible = !1, this.main_exchange.visible = !1, y.RegistEvent("Advertisement", this, this.advBack)
    }
    bindButtons() {
      let e = this;
      this.main_signin.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), q.openUI(n.UIVIEW.SIGNINVIEW)
      }), this.main_skin.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, x.onskinScena(), q.openUI(n.UIVIEW.SKINVIEW)
      }), this.img_wuqi.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.dewuqi, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")
      }), this.main_deal.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), q.dealView.visible = !0
      }), this.main_start.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, q.openUI(n.UIVIEW.GAMEVIEW), q.openUI(n.UIVIEW.ANIVIEW), $.Jsb.AutoRecordVideo("start", e => { })
      }), this.main_exchange.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK)
      })
      this.main_deal.visible = false;
    }
    initOppoMoreGame() { }
    alternate() {
      if (!this.delay_alternate) {
        let e = this.oppo_mg_box.getChildAt(0);
        this.delay_alternate = Laya.timer.loop(2e3, this, function () {
          this.a = !this.a;
          for (var t = 0; t < e.numChildren; t++) {
            let i = e.getChildAt(t);
            this.a ? i.right = t < 5 ? 170 : 10 : i.right = t < 5 ? 10 : 170
          }
        })
      }
    }
    initExchange() {
      this.exchange.visible = !1;
      let e = this;
      this.main_exchange.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.exchange_box.visible = !0, e.exchange_show.visible = !1, e.exchange.visible = !0
      }), this.exchange_close.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.exchange.visible = !1
      }), this.exchange_btn.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.compareCode(e.exchange_input.text) >= 0 ? (e.exchange_box.visible = !1, e.exchange_show_item.skin = "", e.exchange_show.visible = !0, Laya.SoundManager.playSound(n.SOUNDURL.AWARD), q.showAlert("Redemption successful!")) : q.showAlert("mistake"), e.exchange_input.text = ""
      }), this.exchange_show_get.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.exchange.visible = !1
      })
    }
    controlGuideHand() {
      Laya.timer.clearAll(this.guideHand), Laya.timer.loop(20, this.guideHand, () => {
        this.guideHand.visible && (this.guideHandAngle += 4, this.guideHandrisUp ? this.guideHandX += 3.5 : this.guideHandX -= 3.5, this.guideHandY = 75 * Math.sin(Math.PI * this.guideHandAngle / 180), this.guideHandAngle % 360 == 0 && (this.guideHandrisUp = !this.guideHandrisUp), this.guideHand.x = this.guideHandX + 160, this.guideHand.y = this.guideHandY + 750)
      })
    }
    compareCode(e) {
      for (let e = 0; e < n.EXCHANGECODE.length; e++) n.EXCHANGECODE[e];
      return -1
    }
    advBack(e) {
      console.log("广告", e);
      let i = n.advType == t.dewuqi;
      if (!i) return;
      let o = e.split(","),
        a = +o[1],
        s = +o[0];
      n.isMusicOn && y.DispatchEvent("play_music"), 5 != s || 1 != a || (i && (q.showAlert("Received successfully!"), x.weaponType = 5, null != this.player && this.player.changeWeapon()), n.advType = t.normal)
    }
    showMainUI() {
      null != x.currentPlay.getComponent(C) && (this.player = x.currentPlay.getComponent(C)), this.controlGuideHand(), this.img_rotaion.rotation = 0, Laya.Tween.clearAll(this.img_rotaion), Laya.Tween.to(this.img_rotaion, {
        rotation: 36e3
      }, 5e5, null, Laya.Handler.create(this.img_rotaion, () => {
        this.img_rotaion.rotation = 0
      })), Laya.timer.clearAll(this.img_text);
      let e = new Laya.TimeLine;
      this.img_text.rotation = 30, e.to(this.img_text, {
        rotation: 40
      }, 100).to(this.img_text, {
        rotation: 20
      }, 100).to(this.img_text, {
        rotation: 30
      }, 100).to(this.img_text, {
        rotation: 30
      }, 100, null, 1500), e.play(0, !0), 2 == n.guanData[x.totalLevel] || "store" == x.currentGuan.name ? this.img_wuqi.visible = !1 : this.img_wuqi.visible = !0, this.onAd(!0), this.oppoGame(), this.main_start.offAll();
      let t = this;
      this.main_start.on(n.Rift ? Laya.Event.MOUSE_DOWN : Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), t.visible = !1, q.openUI(n.UIVIEW.GAMEVIEW), q.openUI(n.UIVIEW.ANIVIEW), $.Jsb.AutoRecordVideo("start", e => { })
      }), this.oppo_mg_box.visible && $.Jsb.showOppoBanner(!1)
    }
    oppoGame() { }
    onAd(e) {
      if ($.platform == J.WXMinGame) {
        if (this.offonbl) {
          let e = new Laya.Image("moregame/game0.png"),
            o = new Laya.Image("moregame/game1.png"),
            n = new Laya.Image("moregame/game2.png"),
            a = new Laya.Image("moregame/game5.png");
          var t = ["wx360f76a96a0271f7", "wxf60c105554d34ad7", "wx2319a84a24d50bcc", "wx55b655b17b9cc4ce"];
          this.nodeArr = [e, o, n, a];
          for (let e = 0; e < this.nodeArr.length; e++) {
            this.addChild(this.nodeArr[e]), this.nodeArr[e].zOrder = 1002, this.nodeArr[e].height = 80, this.nodeArr[e].width = 80, (e + 1) % 2 == 0 ? this.nodeArr[e].top = 250 : this.nodeArr[e].bottom = 300, e >= 2 ? this.nodeArr[e].left = 15 : this.nodeArr[e].right = 15, this.nodeArr[e].on(Laya.Event.MOUSE_UP, this, () => {
              window.wx.navigateToMiniProgram({
                appId: t[e],
                success: function () {
                  console.log("navigate success")
                },
                fail: function (e) {
                  console.log("navigate fail：", e)
                }
              })
            }), this.nodeArr[e].visible = !1;
            var i = new Laya.TimeLine;
            i.to(this.nodeArr[e], {
              rotation: -6
            }, 400).to(this.nodeArr[e], {
              rotation: 6
            }, 800).to(this.nodeArr[e], {
              rotation: 0
            }, 400).to(this.nodeArr[e], {
              rotation: .1
            }, 1200), i.play(0, !0)
          }
          this.offonbl = !1
        }
        e ? (this.nodeArr[0].visible = !0, this.nodeArr[1].visible = !0, this.nodeArr[2].visible = !0, this.nodeArr[3].visible = !0) : (this.nodeArr[0].visible = !1, this.nodeArr[1].visible = !1, this.nodeArr[2].visible = !1, this.nodeArr[3].visible = !1)
      }
    }
  }
  class _ extends e.RockerViewUI {
    constructor() {
      super(), this.a = 0, this.a3d = 0, this.speed = 0
    }
    reset() {
      this.sp0.x = 0, this.sp0.y = 0
    }
    resetPos() {
      this.x = Laya.stage.width / 2, this.y = Laya.stage.height - 420
    }
    resetMainPos(e, t) {
      this.x = e, this.y = t
    }
    getA() {
      return this.a
    }
    getA3d() {
      return this.a3d
    }
    getSpeed() {
      return this.speed
    }
    getSp0() {
      return [this.sp0.x, this.sp0.y]
    }
    getDirRota() {
      return this.dir.rotation
    }
    setSp0(e, t) {
      let i = e - this.x,
        o = t - this.y;
      this.a = Math.atan2(o, i), this.a3d = Math.atan2(this.y - t, e - this.x);
      let n = Math.sqrt(i * i + o * o);
      n > 4 ? (n > 80 ? (n = 80, this.sp0.x = Math.cos(this.a) * n, this.sp0.y = Math.sin(this.a) * n) : (this.sp0.x = i, this.sp0.y = o), this.speed = 1) : (this.reset(), this.speed = 0)
    }
    setSp1(e, t) {
      let i = e - this.x,
        o = Math.abs(i);
      o > 35 && (i = o / i * 35), this.sp0.x = i, i = t - this.y, (o = Math.abs(i)) > 35 && (i = o / i * 35), this.sp0.y = i
    }
    rotate(e) {
      this.dir.rotation = (2 * Math.PI - e) / Math.PI * 180 + 90
    }
  }
  class V extends e.GameViewUI {
    constructor() {
      super(), this.shut = !0, this.press = !1, this.touchPoint = new Laya.Vector2(0, 0), x.gameView = this, this.rocker = new _, this.game_mouse.addChild(this.rocker), this.rocker.resetPos()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons(), this.registMouseEvent(), y.RegistEvent("Advertisement", this, this.advBack)
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, this.initGameInfo(), this.img_hp.value = 1, x.box_mouse = this.game_mouse, x.xuetiao = this.img_hp, x.Bossxuetiao = this.boss_hp;
      let e = x.changecamera(x.Player, this.img_bghp);
      this.img_bghp.pos(e.x, e.y - 200), this.progressL.visible = !1, this.Choosethree.visible = !1, this.passG.on(Laya.Event.CLICK, this, () => {
        I.passReset()
      }), this.moneyMax.on(Laya.Event.CLICK, this, this.onmoneyMax), this.First.on(Laya.Event.CLICK, this, this.onFirst), this.moneyMin.on(Laya.Event.CLICK, this, this.onmoneyMin), this.pistol.on(Laya.Event.CLICK, this, this.onpistol), this.rifle.on(Laya.Event.CLICK, this, this.onrifle), this.darts.on(Laya.Event.CLICK, this, this.ondarts), this.knife.on(Laya.Event.CLICK, this, this.onknife), this.agile.on(Laya.Event.CLICK, this, this.onagile), this.hidden.on(Laya.Event.CLICK, this, this.onhidden), null != x.currentGuan.getChildByName("BOSS") ? Laya.timer.once(5e3, this.bossimg, () => {
        this.bossimg.visible = !0
      }) : this.bossimg.visible = !1, this.changeHPBar(1, !1)
    }
    shutNative() {
      this.shut && (Laya.timer.clear(this, this.showIcon), Laya.timer.clear(this, this.shutNative), this.game_Icon.visible = !1, $.Jsb.initNative(3), Laya.timer.once(500, this, this.showIcon), Laya.timer.frameOnce(600, this, this.shutNative))
    }
    showIcon() {
      let e = new Date,
        t = e.getMonth() + 1,
        i = e.getDate(),
        o = e.getHours();
      if (11 == t && i <= 25 && o <= 11);
      else $.Jsb.showNativeInBox(3, this.game_Icon, e => { })
    }
    hideIcon() {
      this.game_Icon.visible = !1
    }
    showNative() {
      $.Jsb.showNativeInBox(0, this.game_native, e => { })
    }
    loadNative() { }
    hideNative() {
      this.game_native.visible = !1
    }
    onAdTw(e) {
      Laya.Tween.to(e, {
        x: -1e3
      }, 600)
    }
    onAdt() {
      for (let e = 0; e < this.Choosethree.numChildren - 2; e++) {
        this.Choosethree.getChildAt(e).getChildByName("Ad").visible = !0
      }
      this.passG.visible = !0
    }
    changeHPBar(e, t) {
      Laya.Tween.clearAll(this.imghp);
      let i = 205 * e;
      t ? Laya.Tween.to(this.imghp, {
        width: i
      }, 200) : this.imghp.width = i, 1 != e ? (this.redkuang.visible = !0, Laya.Tween.clearAll(this.redkuang), this.redkuang.alpha = .2, Laya.Tween.to(this.redkuang, {
        alpha: .8
      }, 300, null, Laya.Handler.create(this.redkuang, () => {
        this.redkuang.alpha = .2, this.redkuang.visible = !1
      }))) : this.redkuang.visible = !1
    }
    onhidden() {
      this.moneyMax.getChildByName("Ad").visible ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward01, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (x.isHide = !0, this.onAdTw(this.hidden), this.onAdt())
    }
    onagile() {
      this.moneyMax.getChildByName("Ad").visible ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward02, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (x.playsteep += 50, this.onAdTw(this.agile), this.onAdt())
    }
    onknife() {
      this.moneyMax.getChildByName("Ad").visible ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward03, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (x.weaponType = 1, this.onAdTw(this.knife), this.onAdt())
    }
    ondarts() {
      this.moneyMax.getChildByName("Ad").visible ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward04, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (x.weaponType = 5, this.onAdTw(this.darts), this.onAdt())
    }
    onrifle() {
      this.moneyMax.getChildByName("Ad").visible ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward05, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (x.weaponType = 2, this.onAdTw(this.rifle), this.onAdt())
    }
    onpistol() {
      this.moneyMax.getChildByName("Ad").visible ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward06, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (x.weaponType = 4, this.onAdTw(this.pistol), this.onAdt())
    }
    onmoneyMin() {
      let e = this.moneyMax.getChildByName("Ad").visible;
      e ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward07, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (r.money += 50, e = !0, q.updateMoney(), this.onAdTw(this.moneyMin), this.onAdt())
    }
    onmoneyMax() {
      let e = this.moneyMax.getChildByName("Ad").visible;
      e ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward08, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (r.money += 200, e = !0, q.updateMoney(), this.onAdTw(this.moneyMax), this.onAdt())
    }
    onFirst() {
      let e = this.First.getChildByName("Ad").visible;
      e ? ($.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.reward09, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")) : (x.nowHP += 40, x.nowHP > 100 && (x.nowHP = 100), e = !0, this.onAdTw(this.First), this.onAdt()), x.xuetiao.value = x.nowHP / x.allHP, this.changeHPBar(x.nowHP / x.allHP, !0)
    }
    oncheckpointUi() {
      for (let e = 0; e < n.guanData.length; e++) {
        let t = this.LevelsX.getChildAt(e);
        1 == n.guanData[e] ? t.skin = this.LevelsX.getChildAt(0).skin : t.skin = this.LevelsX.getChildAt(1).skin, t.getChildAt(0).visible = !1
      }
      this.txk.getChildAt(1).visible = !1
    }
    onshowReward(e = !1) {
      if (this.Choosethree.visible = e, !e) return this.img_hp.visible = !0, void (this.img_bghp.visible = !0);
      this.img_hp.visible = !1, this.img_bghp.visible = !1;
      for (let e = 0; e < this.Choosethree.numChildren - 2; e++) {
        let t = this.Choosethree.getChildAt(e);
        t.x = -1e3, t.getChildByName("Ad").visible = !1, Laya.timer.clearAll(t), t.scale(1, 1);
        let i = new Laya.TimeLine;
        i.to(t, {
          scaleX: 1.2,
          scaleY: 1.2
        }, 800).to(t, {
          scaleX: 1,
          scaleY: 1
        }, 800).to(t, {
          scaleX: 1,
          scaleY: 1
        }, 1, null, 3e3), i.play(0, !0)
      }
      this.passG.visible = !1, x.nowHP < 90 ? this.First.x = 340 : Math.random() > .7 ? this.moneyMax.x = 340 : this.moneyMin.x = 340;
      let t = 0;
      switch (1 == x.weaponType ? t = 4 : 4 == x.weaponType ? t = Math.random() > .5 ? 5 : 2 : 5 == x.weaponType ? t = Math.random() > .5 ? 2 : 1 : 2 == x.weaponType && (t = Math.random() > .5 ? 5 : 4), t) {
        case 1:
          this.knife.x = 540;
          break;
        case 2:
          this.rifle.x = 540;
          break;
        case 4:
          this.pistol.x = 540;
          break;
        case 5:
          this.darts.x = 540
      }
      x.isHide ? this.agile.x = 740 : Math.random() > .5 ? this.hidden.x = 740 : this.agile.x = 740
    }
    advBack(e) {
      console.log("广告", e);
      let i = n.advType == t.reward01,
        o = n.advType == t.reward02,
        a = n.advType == t.reward03,
        s = n.advType == t.reward04,
        h = n.advType == t.reward05,
        l = n.advType == t.reward06,
        d = n.advType == t.reward07,
        p = n.advType == t.reward08,
        c = n.advType == t.reward09;
      if (!(i || o || a || s || h || l || d || p || c)) return;
      let g = e.split(","),
        m = +g[1],
        u = +g[0];
      n.isMusicOn && y.DispatchEvent("play_music"), 5 != u || 1 != m || (i ? (q.showAlert("Received successfully!"), x.isHide = !0, this.onAdTw(this.hidden), this.onAdt()) : o ? (q.showAlert("Received successfully!"), x.playsteep += 50, this.onAdTw(this.agile), this.onAdt()) : a ? (q.showAlert("Received successfully!"), x.weaponType = 1, this.onAdTw(this.knife), this.onAdt()) : s ? (q.showAlert("Received successfully!"), x.weaponType = 5, this.onAdTw(this.darts), this.onAdt()) : h ? (q.showAlert("Received successfully!"), x.weaponType = 2, this.onAdTw(this.rifle), this.onAdt()) : l ? (q.showAlert("Received successfully!"), x.weaponType = 4, this.onAdTw(this.pistol), this.onAdt()) : d ? (q.showAlert("Received successfully!"), r.money += 1, q.updateMoney(), this.onAdTw(this.moneyMin), this.onAdt()) : p ? (q.showAlert("Received successfully!"), r.money += 200, q.updateMoney(), this.onAdTw(this.moneyMax), this.onAdt()) : c && (q.showAlert("Received successfully!"), x.nowHP += 40, x.nowHP > 100 && (x.nowHP = 100), this.onAdTw(this.First), this.onAdt(), x.xuetiao.value = x.nowHP / x.allHP, this.changeHPBar(x.nowHP / x.allHP, !0)), n.advType = t.normal)
    }
    bindButtons() {
      this.game_win.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), I.gameWin()
      }), this.game_lose.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), I.gameRevive()
      }), this.cardClose.on(Laya.Event.CLICK, this, () => {
        Laya.Tween.clearAll(this.card), this.card.scale(1.2, 1.3), Laya.Tween.to(this.card, {
          scaleX: .01,
          scaleY: .01
        }, 1e3, null, Laya.Handler.create(this.card, () => {
          this.card.visible = !1, this.registMouseEvent()
        }))
      }), this.game_win.visible = !1, this.game_lose.visible = !1
    }
    initGameInfo() {
      this.updateGameBar(0)
    }
    updateGameBar(e, t = !1) { }
    registMouseEvent() {
      this.rocker.visible = !0, this.game_mouse.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown), this.game_mouse.on(Laya.Event.MOUSE_UP, this, this.onTouchUp)
    }
    removeMouseEvent() {
      this.game_mouse.off(Laya.Event.MOUSE_DOWN, this, this.onTouchDown), this.game_mouse.off(Laya.Event.MOUSE_MOVE, this, this.onTouchMove), this.game_mouse.off(Laya.Event.MOUSE_UP, this, this.onTouchUp), this.rocker.reset(), this.rocker.resetPos(), x.rockerX = 0, x.rockerY = 0, this.rocker.visible = !1, this.press = !1
    }
    onTouchDown(e) {
      x.isMove = !0, this.rocker.resetMainPos(e.stageX, e.stageY), this.press = !0, this.touchPoint.x = Laya.stage.mouseX, this.touchPoint.y = Laya.stage.mouseY, this.game_mouse.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove)
    }
    onTouchMove(e) {
      x.isMove = !0, this.touchPoint.x = Laya.stage.mouseX, this.touchPoint.y = Laya.stage.mouseY;
      this.rocker.getSpeed();
      let t = this.rocker.getA3d(),
        i = this.rocker.getSp0();
      this.rocker.rotate(t), this.rocker.setSp0(e.stageX, e.stageY), x.rockerX = i[0], x.rockerY = i[1], x.rockRotate = this.rocker.getDirRota()
    }
    onTouchUp(e) {
      this.press = !1, x.isMove = !1, this.rocker.reset(), this.rocker.resetPos(), x.rockerX = 0, x.rockerY = 0, this.game_mouse.off(Laya.Event.MOUSE_MOVE, this, this.onTouchMove), this.touchPoint.x = Laya.stage.mouseX, this.touchPoint.y = Laya.stage.mouseY
    }
    showGameUI() {
      this.oncheckpointUi(), 1 == r.bosslevel ? (this.boos.skin = "ui/boss2.png", this.bossIcon.skin = "ui/boss2.png", 0 == r.totalLevel ? (this.card.visible = !0, this.cardIcon.skin = "ui/boss2.png", this.cardname.text = "Badass 2", this.cardexplain.text = "bully classmate", this.cardwork.text = "save classmates") : this.card.visible = !1) : 2 == r.bosslevel ? (this.boos.skin = "ui/boss3.png", this.bossIcon.skin = "ui/boss3.png", 0 == r.totalLevel ? (this.card.visible = !0, this.cardIcon.skin = "ui/boss3.png", this.cardname.text = "Badass 3", this.cardexplain.text = "not obedient", this.cardwork.text = "one prank") : this.card.visible = !1) : (this.boos.skin = "ui/tx.png", this.bossIcon.skin = "ui/tx.png", 0 == r.totalLevel ? (this.card.visible = !0, this.cardIcon.skin = "ui/tx.png", this.cardname.text = "Badass 1", this.cardexplain.text = "Grab Kids Snacks", this.cardwork.text = "defeat him") : this.card.visible = !1), 1 == this.card.visible && (Laya.Tween.clearAll(this.card), this.card.scale(.01, .01), this.removeMouseEvent(), Laya.Tween.to(this.card, {
        scaleX: 1.2,
        scaleY: 1.3
      }, 3e3)), null != x.currentGuan.getChildByName("BOSS") ? Laya.timer.once(5e3, this.bossimg, () => {
        this.bossimg.visible = !0
      }) : this.bossimg.visible = !1
    }
  }
  class M extends e.WinViewUI {
    constructor() {
      super()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, y.RegistEvent("Advertisement", this, this.advBack)
    }
    bindButtons() {
      let e = this;
      this.win_ad.on(Laya.Event.CLICK, this, () => {
        $.Jsb.HideGameBanner(), $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.wblingqu, this.getcoin = this.win_coin.value, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")
      }), this.win_close.on(Laya.Event.CLICK, this, () => {
        $.Jsb.HideGameBanner(), $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, I.gameReset(), q.openUI(n.UIVIEW.MAINVIEW), r.money += parseInt(this.win_coin.value), q.updateMoney(), r.SaveData(), $.Jsb.AutoRecordVideo("destroy", e => { })
      }), this.popup_ad.on(Laya.Event.CLICK, this, () => {
        $.Jsb.HideGameBanner(), $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.wblingqu, this.getcoin = "500", n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")
      }), this.popup_close.on(Laya.Event.CLICK, this, () => {
        this.popup.visible = !1;
        let e = this.win_native;
        e.visible = !1;
        $.Jsb.showNativeInBox(1, e, e => { })
      })
    }
    setWinCoin(e) {
      this.win_coin.value = "" + e
    }
    shareComplate() {
      r.money += 5 * parseInt(this.getcoin), r.SaveData()
    }
    showNative() {
      showInterstitialMini();
      if ($.platform == J.OppoMinGame) {
        let e = this.win_native;
        e.visible = !1;
        $.Jsb.showNativeInBox(1, e, e => { });
        $.Jsb.showNativeInsert(this.wins_native), this.popup.visible = !1, n.Adblock || (this.win_native.visible = !1, Laya.timer.once(700, this, () => {
          this.popup.visible = !0;
          $.Jsb.showNativeInBox(2, this.popup_native, e => { })
        }))
      } else if ($.platform == J.VivoMinGame) {
        let e = this.wins_native,
          t = this.win_native;
        if (t.visible = !1, e.visible = !1, 0 == Math.floor(3 * Math.random())) $.Jsb.loadInsert(!0, i => {
          if (i) $.Jsb.vivoNative(t, e => { });
          else {
            let i = e.getChildByName("title"),
              o = e.getChildByName("desc");
            i.visible = !0, o.visible = !0, $.Jsb.vivoNative(e, e => {
              $.Jsb.vivoNative(t, e => { })
            })
          }
        });
        else {
          let i = e.getChildByName("title"),
            o = e.getChildByName("desc");
          i.visible = !0, o.visible = !0, $.Jsb.vivoNative(e, e => {
            $.Jsb.vivoNative(t, e => { })
          })
        }
      }
    }
    advBack(e) {
      console.log("广告", e);
      let i = n.advType == t.wblingqu;
      if (!i) return;
      let o = e.split(","),
        a = +o[1],
        s = +o[0];
      if (n.isMusicOn && y.DispatchEvent("play_music"), 5 != s || 1 != a);
      else {
        if (i) {
          if (q.showAlert("Five times the success!"), $.Jsb.playSound(n.SOUNDURL.CLICK), "500" == this.getcoin) {
            this.popup.visible = !1;
            let e = this.win_native;
            e.visible = !1;
            $.Jsb.showNativeInBox(1, e, e => { })
          } else this.visible = !1;
          I.gameReset(), q.openUI(n.UIVIEW.MAINVIEW), this.shareComplate(), q.updateMoney(), r.SaveData()
        }
        n.advType = t.normal
      }
    }
  }
  class E extends e.LoseViewUI {
    constructor() {
      super()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height
    }
    bindButtons() {
      let e = this;
      this.lose_again.on(Laya.Event.CLICK, this, () => {
        $.Jsb.HideGameBanner(), $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, I.gameReset(), q.openUI(n.UIVIEW.MAINVIEW), x.nowHP = 100, x.allHP = 100, x.gameView.changeHPBar(1, !1)
      })
    }
    showNative() {
      showInterstitialMini();
      if ($.platform == J.OppoMinGame) {
        let e = this.lose_native;
        e.visible = !1;
        $.Jsb.showNativeInBox(1, e, e => { });
        $.Jsb.showNativeInsert(this.loses_native)
      } else if ($.platform == J.VivoMinGame) {
        let e = this.loses_native,
          t = this.lose_native;
        if (t.visible = !1, e.visible = !1, 0 == Math.floor(3 * Math.random())) $.Jsb.loadInsert(!0, i => {
          if (i) $.Jsb.vivoNative(t, e => { });
          else {
            let i = e.getChildByName("title"),
              o = e.getChildByName("desc");
            i.visible = !0, o.visible = !0, $.Jsb.vivoNative(e, e => {
              $.Jsb.vivoNative(t, e => { })
            })
          }
        });
        else {
          let i = e.getChildByName("title"),
            o = e.getChildByName("desc");
          i.visible = !0, o.visible = !0, $.Jsb.vivoNative(e, e => {
            $.Jsb.vivoNative(t, e => { })
          })
        }
      }
    }
  }
  class B extends e.SkinViewUI {
    constructor() {
      super(), this.curPage = 1, this.chooseSkin = 0, this.chooseWeapon = 0
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons(), this.curPage = 0
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, y.RegistEvent("Advertisement", this, this.advBack), this.showPage(0)
    }
    bindButtons() {
      let e = this;
      this.skin_close.on(Laya.Event.CLICK, this, () => {
        this.refreshUi(r.Currentskin), this.skin_ad.visible = !1, this.skin_ad02.visible = !1, this.buy_img.visible = !1, $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, q.openUI(n.UIVIEW.MAINVIEW), x.reset()
      }), this.skin_ad.visible = !1, this.skin_ad02.visible = !1, this.buy_img.visible = !1, this.skin_ad.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.skinUse, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")
      }), this.skin_ad02.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), this.knife_box.visible ? r.Currentweapons = this.chooseWeapon : r.Currentskin = this.chooseSkin, this.skin_ad02.visible = !1, q.showAlert("Use successfully"), r.SaveData()
      }), this.btn_skin.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.showPage(0)
      }), this.btn_knife.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.showPage(1)
      }), this.readSkin(), this.buy_img.on(Laya.Event.CLICK, this, () => {
        r.ReadData(), this.knife_box.visible ? r.money >= 1e3 * this.chooseWeapon ? (r.money -= 1e3 * this.chooseWeapon, r.weaponsUnlock[this.chooseWeapon] = !0, r.SaveData(), this.buy_img.visible = !1, this.skin_ad.visible = !1, this.skin_ad02.visible = !0, q.showAlert("购买成功"), q.updateMoney(), this.readSkin()) : q.showAlert("金币不足") : r.money >= 1e3 * this.chooseSkin ? (r.money -= 1e3 * this.chooseSkin, q.showAlert("购买成功"), r.skinUnlock[this.chooseSkin] = !0, r.SaveData(), this.refreshUi(this.chooseSkin), this.buy_img.visible = !1, this.skin_ad.visible = !1, this.skin_ad02.visible = !0, q.updateMoney(), this.readSkin()) : q.showAlert("Gold inadequate")
      });
      for (let e = 0; e < this.skinos.numChildren - 2; e++) {
        let t = this.skinos.getChildAt(e),
          i = t.getChildAt(2);
        i.getChildAt(0).getChildAt(0).text = (1e3 * e).toString(), t.on(Laya.Event.CLICK, this, () => {
          this.changSkindesc(e), this.chooseSkin = e, this.refreshUi(e), e == r.Currentskin ? (this.skin_ad.visible = !1, this.skin_ad02.visible = !1, this.buy_img.visible = !1) : i.visible ? (this.skin_ad.visible = !0, this.buy_img.visible = !0, this.skin_ad02.visible = !1) : (this.buy_img.visible = !1, this.skin_ad.visible = !1, this.skin_ad02.visible = !0)
        })
      }
      for (let e = 0; e < this.skinos2.numChildren - 2; e++) {
        let t = this.skinos2.getChildAt(e),
          i = t.getChildAt(2);
        i.getChildAt(0).getChildAt(0).text = (1e3 * e).toString(), t.on(Laya.Event.CLICK, this, () => {
          this.chooseWeapon = e, this.skin_desc.visible = !1, this.weaponsUi(e), e == r.Currentweapons ? (this.skin_ad.visible = !1, this.skin_ad02.visible = !1, this.buy_img.visible = !1) : i.visible ? (this.skin_ad.visible = !0, this.buy_img.visible = !0, this.skin_ad02.visible = !1) : (this.buy_img.visible = !1, this.skin_ad.visible = !1, this.skin_ad02.visible = !0)
        })
      }
      this.skinos.left = 0, this.refreshArrow(), this.arrow01.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.knife_box.visible ? this.skinos2.left <= -495 && (this.skinos2.left = 0, this.arrow02.visible = !0, this.arrow01.visible = !1) : (0 == this.skinos.left ? this.arrow01.visible = !1 : -495 == this.skinos.left ? (this.skinos.left = 0, this.arrow01.visible = !1) : this.skinos.left = -495, this.refreshArrow())
      }), this.arrow02.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.knife_box.visible ? this.skinos2.left >= 0 && (this.skinos2.left = -495, this.arrow02.visible = !1, this.arrow01.visible = !0) : (0 == this.skinos.left ? this.skinos.left = -495 : -495 == this.skinos.left ? (this.skinos.left = -820, this.arrow02.visible = !1) : this.skinos.left = 0, this.refreshArrow())
      })
    }
    showPage(e) {
      this.curPage != e && (this.curPage = e, this.skin_box.visible = 0 == this.curPage, this.knife_box.visible = 1 == this.curPage, this.btn_skin.skin = 0 == this.curPage ? "ui/btn_orange.png" : "ui/btn_blue.png", this.btn_knife.skin = 1 == this.curPage ? "ui/btn_orange.png" : "ui/btn_blue.png", this.buy_img.visible = !1, this.skin_ad.visible = !1, this.skin_ad02.visible = !1, this.arrow01.visible = !1, this.arrow02.visible = !0, this.skinos.left = 0, this.skinos2.left = 0)
    }
    refreshArrow() {
      this.skinos.left < 0 ? this.arrow01.visible = !0 : this.arrow01.visible = !1, this.skinos.left > -820 ? this.arrow02.visible = !0 : this.arrow02.visible = !1
    }
    changSkindesc(e) {
      switch (this.skin_desc.visible = !0, e) {
        case 0:
          this.skin_desc.text = "Rawlins";
          break;
        case 1:
          this.skin_desc.text = "Clifford";
          break;
        case 2:
          this.skin_desc.text = "Spiderman";
          break;
        case 3:
          this.skin_desc.text = "Batman";
          break;
        case 4:
          this.skin_desc.text = "Ruddy";
          break;
        case 5:
          this.skin_desc.text = "Skeletron";
          break;
        case 6:
          this.skin_desc.text = "Mr Rage";
          break;
        case 7:
          this.skin_desc.text = "Aliens"
      }
    }
    refreshUi(e) {
      r.ReadData(), x.chooseSkin(e);
      for (let t = 0; t < this.skinos.numChildren - 2; t++) {
        let i = this.skinos.getChildAt(t).getChildAt(0);
        i.skin = e == t ? this.skinos.getChildAt(this.skinos.numChildren - 1).skin : this.skinos.getChildAt(this.skinos.numChildren - 2).skin
      }
      this.changSkindesc(e)
    }
    weaponsUi(e) {
      r.ReadData(), x.chooseWeapons(e);
      for (let t = 0; t < this.skinos2.numChildren - 2; t++) {
        let i = this.skinos2.getChildAt(t).getChildAt(0);
        i.skin = e == t ? this.skinos2.getChildAt(this.skinos2.numChildren - 1).skin : this.skinos2.getChildAt(this.skinos2.numChildren - 2).skin
      }
    }
    readSkin() {
      let e = r.skinUnlock;
      for (let t = 0; t < this.skinos.numChildren - 2; t++) {
        let i = this.skinos.getChildAt(t).getChildAt(2);
        e[t] ? i.visible = !1 : i.visible = !0
      }
      let t = r.weaponsUnlock;
      for (let e = 0; e < this.skinos2.numChildren - 2; e++) {
        let i = this.skinos2.getChildAt(e).getChildAt(2);
        t[e] ? i.visible = !1 : i.visible = !0
      }
    }
    advBack(e) {
      if (n.advType != t.skinUse) return;
      let i = e.split(","),
        o = +i[1];
      5 == +i[0] && 1 == o ? (this.knife_box.visible ? (r.weaponsUnlock[this.chooseWeapon] = !0, r.SaveData(), this.weaponsUi(this.chooseWeapon)) : (r.skinUnlock[this.chooseSkin] = !0, r.SaveData(), this.refreshUi(this.chooseSkin)), n.advType = t.normal, q.showAlert("successful trial"), this.readSkin(), this.skin_ad.visible = !1, this.buy_img.visible = !1, this.skin_ad02.visible = !0, n.isMusicOn && y.DispatchEvent("play_music")) : q.showAlert("will get it soon")
    }
  }
  class U extends e.MoneyViewUI {
    constructor() {
      super(), this.IPtext = 0
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, this.resumeMusic(), this.money_sound.skin = r.musicState ? "ui/ui_sound_open.png" : "ui/ui_sound_close.png", this.money_shake.skin = r.shakeState ? "ui/ui_shake_open.png" : "ui/ui_shake_close.png"
    }
    bindButtons() {
      let e = this;
      this.money_sound.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.changeSoundState()
      }), this.money_shake.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.changeShakeState()
      }), this.box_price.on(Laya.Event.CLICK, this, () => {
        this.IPtext++, 10 == this.IPtext && (this.IPtext = 0, this.money_num.value = g.Ipsite)
      })
    }
    updateMoney() {
      this.money_num.value = "" + r.money, this.money_num.scaleX = 1.5, this.money_num.scaleY = 1.5, Laya.Tween.to(this.money_num, {
        scaleX: 1,
        scaleY: 1
      }, 300, null, null, null, !0)
    }
    changeSoundState() {
      n.isMusicOn = !n.isMusicOn, n.isSoundOn = !n.isSoundOn, r.musicState = !r.musicState, r.SaveData(), this.money_sound.skin = r.musicState ? "ui/ui_sound_open.png" : "ui/ui_sound_close.png", this.resumeMusic(), n.isSoundOn || r.musicState ? y.DispatchEvent("play_music") : y.DispatchEvent("stop_music")
    }
    changeShakeState() {
      r.shakeState = !r.shakeState, r.SaveData(), this.money_shake.skin = r.shakeState ? "ui/ui_shake_open.png" : "ui/ui_shake_close.png"
    }
    resumeMusic() {
      Laya.SoundManager.setMusicVolume(r.musicState ? 1 : 0), Laya.SoundManager.setSoundVolume(r.musicState ? 1 : 0)
    }
    pauseMusic() {
      Laya.SoundManager.setMusicVolume(0), Laya.SoundManager.setSoundVolume(0), Laya.SoundManager.playMusic(n.SOUNDURL.EMPTY, 0)
    }
  }
  class X extends e.PushViewUI {
    constructor() {
      super(), this.rand = 0
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons(), y.RegistEvent("Advertisement", this, this.advBack)
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, this.rand = Math.floor(7 * Math.random() + 2), this.push_item.skin = "img/PF0" + this.rand + ".png"
    }
    bindButtons() {
      let e = this;
      this.push_close.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, $.Jsb.initNative(3), I.gameStart()
      }), this.push_ad.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.skinsuiji, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")
      })
    }
    showPushUI() {
      this.visible = !0, this.rand = Math.floor(7 * Math.random() + 2), this.push_item.skin = "img/PF0" + this.rand + ".png"
    }
    advBack(e) {
      console.log("广告", e);
      let i = n.advType == t.skinsuiji;
      if (!i) return;
      let o = e.split(","),
        a = +o[1],
        s = +o[0];
      n.isMusicOn && y.DispatchEvent("play_music"), 5 != s || 1 != a || (i && (q.showAlert("The skin trial was successful!"), this.rand > 1 && (x.currentPlay.getChildByName("Character").getChildAt(4).skinnedMeshRenderer.sharedMaterial = x.skinNode.getChildAt(this.rand - 1).meshRenderer.sharedMaterial), this.visible = !1, I.gameStart()), n.advType = t.normal)
    }
    showNative() {
      $.Jsb.showNativeInBox(2, this.loses_native, e => { });
      $.Jsb.showNativeInsert(this.push_native), q.gameView.game_native.visible = !1, q.gameView.game_Icon.visible = !1
    }
  }
  class Y extends e.ShareViewUI {
    constructor() {
      super()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height
    }
    bindButtons() {
      let e = this;
      this.share_btn.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.recordVideo(e.shareSuccess), $.Jsb.AutoRecordVideo("stop", t => {
          t ? (q.showAlert("太棒了！分享成功了"), e.visible = !1, q.openUI(n.UIVIEW.WINVIEW, !1), I.gameReset(), q.openUI(n.UIVIEW.MAINVIEW), r.money += 500, q.updateMoney(), r.SaveData(), $.Jsb.AutoRecordVideo("destroy", e => { })) : q.showAlert("哎呀！分享失败了")
        })
      }), this.share_img.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.recordVideo(e.shareSuccess), $.Jsb.AutoRecordVideo("stop", t => {
          t ? (q.showAlert("太棒了！分享成功了"), e.visible = !1, q.openUI(n.UIVIEW.WINVIEW, !1), I.gameReset(), q.openUI(n.UIVIEW.MAINVIEW), r.money += 500, q.updateMoney(), r.SaveData(), $.Jsb.AutoRecordVideo("destroy", e => { })) : q.showAlert("哎呀！分享失败了")
        })
      }), this.share_close.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, window.isRecord = !1, window.recordDone = !1
      })
    }
    shareSuccess() {
      switch (I.curState) {
        case n.GAMESTATE.WIN:
        case n.GAMESTATE.LOSE:
        case n.GAMESTATE.REVIVE:
      }
    }
    showShareView(e = 0) {
      $.Jsb.pauseRecord();
      let t = "";
      switch (e) {
        case 0:
          t = "炫耀精彩视频获取5倍奖励！";
          break;
        case 1:
          t = "炫耀精彩视频获取免费兑换码！";
          break;
        case 2:
          t = "炫耀精彩视频免费复活一次！"
      }
      this.share_desc && this.share_desc.changeText(t), this.visible = !0
    }
  }
  class R extends e.NativeViewUI {
    constructor() {
      super()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height
    }
    bindButtons() {
      let e = this;
      this.native_btn.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK)
      }), this.native_close.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1
      }), this.native_img.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK)
      })
    }
  }
  class N extends e.TipViewUI {
    constructor() {
      super()
    }
    showAlert(e) {
      this.tip_txt && this.tip_txt.changeText(e)
    }
  }
  class T extends e.SigninViewUI {
    constructor() {
      super()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, this.initSigninBox(), y.RegistEvent("Advertisement", this, this.advBack)
    }
    bindButtons() {
      let e = this;
      this.signin_ad.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.getAward(r.signinCount, !1)
      }), this.signin_ad5.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), $.Jsb.getIsCachedVideo() ? (n.advType = t.signFanbei, n.isMusicOn && y.DispatchEvent("stop_music"), $.Jsb.openAdvert(5)) : q.showAlert("No ads!")
      }), this.signin_close.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1
      })
    }
    initSigninBox() {
      let e = this,
        t = new Date(Laya.Browser.now());
      for (let i = 0; i < this.signin_box.numChildren; i++) {
        let o = this.signin_box.getChildAt(i),
          a = o.getChildAt(3);
        a.anchorX = a.anchorY = .5, r.signinCount > i ? a.visible = !0 : r.signinCount == i && r.signinDay != t.getDay() ? (a.visible = !1, i < 6 && (o.skin = "ui/qd-di2.png"), o.on(Laya.Event.CLICK, this, () => {
          $.Jsb.playSound(n.SOUNDURL.CLICK), e.getAward(i)
        })) : (a.visible = !1, o.on(Laya.Event.CLICK, this, () => {
          $.Jsb.playSound(n.SOUNDURL.CLICK)
        }))
      }
      r.signinCount > 7 || r.signinDay == t.getDay() ? (this.signin_ad.visible = !1, this.signin_ad5.visible = !1) : (this.signin_ad.visible = !0, this.signin_ad5.visible = !0)
    }
    getAward(e, t = !1) {
      this.signin_ad.visible = !1, this.signin_ad5.visible = !1;
      let i = this.signin_box.getChildAt(e);
      i.offAll(Laya.Event.CLICK), i.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), q.showAlert("signed in today")
      }), 1 == e ? r.skinUnlock[2] = !0 : 6 == e && (r.skinUnlock[6] = !0);
      let o = i.getChildAt(2).getChildAt(0),
        a = i.getChildAt(3);
      a.scale(3, 3), a.alpha = .5, a.visible = !0, Laya.Tween.to(a, {
        scaleX: 1,
        scaleY: 1,
        alpha: 1
      }, 1e3, Laya.Ease.circIn), r.signinCount++;
      let s = new Date(Laya.Browser.now());
      r.signinDay = s.getDay();
      let h = parseInt(o.text);
      t && (h *= 2), r.money += h, r.SaveData(), q.updateMoney()
    }
    advBack(e) {
      console.log("广告", e);
      let i = n.advType == t.signFanbei;
      if (!i) return;
      let o = e.split(","),
        a = +o[1],
        s = +o[0];
      n.isMusicOn && y.DispatchEvent("play_music"), 5 != s || 1 != a || (i && (q.showAlert("Double claim success!"), this.getAward(r.signinCount, !0)), n.advType = t.normal)
    }
  }
  class D extends e.AniViewUI {
    constructor() {
      super()
    }
    onAwake() { }
    onEnable() { }
    showGameUI() {
      let e = this;
      this.uirand = !this.uirand, Laya.Tween.clearAll(this.jumpUi), this.jumpUi.visible = !0, this.uirand ? (this.jumpUi.scale(3, 3), Laya.Tween.to(this.jumpUi, {
        scaleX: .1,
        scaleY: .1
      }, 1e3, null, Laya.Handler.create(this.jumpUi, () => {
        this.jumpUi.visible = !1, e.visible = !1
      }))) : this.uirand || (this.jumpUi.scale(.1, .1), Laya.Tween.to(this.jumpUi, {
        scaleX: 3,
        scaleY: 3
      }, 1e3, null, Laya.Handler.create(this.jumpUi, () => {
        this.jumpUi.visible = !1, e.visible = !1
      })))
    }
  }
  class G extends e.DealViewUI {
    constructor() {
      super(...arguments), this.prevX = 0, this.prevY = 0
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height, this.visible = $.platform == J.OppoMinGame && !r.dealstate
    }
    bindButtons() {
      this.dealAgree.on(Laya.Event.CLICK, this, () => {
        this.visible = !1, r.dealstate = !0, r.SaveData()
      }), this.dealClose.on(Laya.Event.CLICK, this, () => {
        qg.exitApplication({
          success: function () { },
          fail: function () { },
          complete: function () { }
        })
      }), this.txt.on(Laya.Event.MOUSE_DOWN, this, this.startScrollText)
    }
    startScrollText() {
      this.prevX = this.txt.mouseX, this.prevY = this.txt.mouseY, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText)
    }
    finishScrollText() {
      this.prevX = 0, this.prevY = 0, Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishScrollText)
    }
    scrollText() {
      var e = this.txt.mouseX,
        t = this.txt.mouseY;
      this.txt.scrollX += this.prevX - e, this.txt.scrollY += this.prevY - t, this.prevX = e, this.prevY = t
    }
  }
  class P {
    constructor() { }
    init() {
      this.scene3d = Laya.stage.addChild(new Laya.Scene3D), this.scene3d.enableFog = !0, this.scene3d.fogStart = 20, this.scene3d.fogRange = 100, this.scene3d.fogColor = new Laya.Vector3(0, .3, 1), this.directionLight = new Laya.DirectionLight, this.directionLight.transform.localRotation = new Laya.Quaternion(-.45, .002, .001, .9), this.directionLight.intensity = 1.8, this.addSprite3D(this.directionLight), r.ReadData(), I.gameInit(), this.mainView = this.addView(new S), this.gameView = this.addView(new V), this.skinView = this.addView(new B), this.winView = this.addView(new M), this.loseView = this.addView(new E), this.reviveView = this.addView(new ee), this.signinView = this.addView(new T, 1001), this.pushView = this.addView(new X, 1001), this.nativeView = this.addView(new R, 1002), this.shareView = this.addView(new Y, 1010), this.moneyView = this.addView(new U, 1051, !0), this.dealView = this.addView(new G, 1051), this.tipView = this.addView(new N, 1100), this.aniView = this.addView(new D, 1001), this.updateMoney()
    }
    addView(e, t = 1e3, i = !1) {
      return e && (e.zOrder = t, e.visible = i, Laya.stage.addChild(e)), e
    }
    addSprite3D(e) {
      return this.scene3d.addChild(e)
    }
    openUI(e, t = !0) {
      switch ($.Jsb.intQQBlockAd(!1), e) {
        case n.UIVIEW.MAINVIEW:
          this.mainView.visible = t, t && ($.Jsb.showOppoBanner(!0), $.Jsb.showTTBanner(!0), this.mainView.showMainUI(), $.Jsb.intQQBlockAd(!0));
          break;
        case n.UIVIEW.SKINVIEW:
          this.skinView.visible = t, t && (this.skinView.refreshUi(r.Currentskin), this.skinView.weaponsUi(r.Currentweapons), this.skinView.readSkin());
          break;
        case n.UIVIEW.GAMEVIEW:
          this.gameView.visible = t, $.Jsb.showTTBanner(!1), t && (this.gameView.showGameUI(), this.pushView.showPushUI(), this.pushView.showNative());
          break;
        case n.UIVIEW.WINVIEW:
          this.winView.visible = t, t && ($.Jsb.showInstertView(), this.winView.showNative(), $.Jsb.showTTBanner(!0), $.Jsb.showOppoBanner(!1), $.platform == J.VivoMinGame || $.Jsb.loadInsert(!0, () => { }));
          break;
        case n.UIVIEW.LOSEVIEW:
          this.loseView.visible = t, t && ($.Jsb.showInstertView(), this.loseView.showNative(), $.Jsb.showTTBanner(!0), $.Jsb.showOppoBanner(!1), $.platform == J.VivoMinGame || $.Jsb.loadInsert(!0, () => { }));
          break;
        case n.UIVIEW.REVIVEVIEW:
          this.reviveView.visible = t, t && (this.reviveView.showNative(), $.Jsb.showTTBanner(!0), $.Jsb.loadInsert(!0, () => { }));
          break;
        case n.UIVIEW.SIGNINVIEW:
          this.signinView.visible = t, t && $.Jsb.showTTBanner(!0);
          break;
        case n.UIVIEW.SHAREVIEW:
          this.shareView.visible = t, t && $.Jsb.showTTBanner(!0);
          break;
        case n.UIVIEW.ANIVIEW:
          this.aniView.visible = t, t && this.aniView.showGameUI()
      }
    }
    updateMoney() {
      this.moneyView.updateMoney()
    }
    showAlert(e) {
      let t = this;
      Laya.timer.clearAll(t), this.tipView.centerX = this.tipView.centerY = 0, this.tipView.showAlert(e), this.tipView.visible = !0, Laya.timer.once(1e3, t, () => {
        t.tipView.visible = !1
      })
    }
    registMouseEvent() { }
    removeMouseEvent() { }
  }
  P.Instance = new P;
  var O, H, z, J, q = P.Instance;
  class W extends l {
    constructor() {
      super(...arguments), this.NativeIndex = 0, this.nativeAd = [], this.nativeCurrentAdList = [], this.nativeAdImage = [], this.AppId = "30321739", this.OpenScreenId = "207441", this.BannerId = "207440", this.RewardedVideoId = "207465", this.NativeId = ["207442", "207443", "263430", "390754"], this.oppoGameBannerId = "264687", this.GameBannerAd = null, this.Nativecount = 0, this.isCachedVideo = !1, this.insertAd = null, this.isCachedInsert = !1, this.isShowIntertView = !0, this.BannerErrCount = 0, this.VoideErrCount = 0, this.InsertErrCount = 0, this.ErrZCount = 3, this.bannerInit = !1, this.NativeInit = !1, this.nativerIdex = 0, this.oppoGonggeId = "291530", this.gamePortalAd = null, this.BannerState = !1, this.iconState = !1, this.isShowBox = !0, this.numopen = 0
    }
    ViewGameBanner() {
      let e = this;
      e.GameBannerAd && e.GameBannerAd.show(), qg.getSystemInfoSync().platformVersionCode >= 1076 ? (e.GameBannerAd = window.qg.createGameBannerAd({
        adUnitId: e.oppoGameBannerId
      }), e.GameBannerAd.show().then(function () {
        console.log("show success")
      }).catch(function (e) {
        console.log("show fail with:" + e.errCode + "," + e.errMsg)
      }), e.GameBannerAd.onLoad(function () {
        console.log("互推盒子横幅广告加载成功"), e.GameBannerAd.show()
      }), e.GameBannerAd.onError(function (e) {
        console.log("互推盒子横幅广告加载失败", JSON.stringify(e))
      })) : console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API")
    }
    HideGameBanner() {
      let e = this;
      e.GameBannerAd && e.GameBannerAd.hide()
    }
    initOppoMoreGame(e) { }
    openAdvert(e) {
      switch (e) {
        case 8:
          this.openSplashAd();
          break;
        case 5:
          this.showRewardVideo();
          break;
        case 3:
          this.showInstertView()
      }
    }
    reportMonitor() {
      window.qg.reportMonitor && qg.getSystemInfoSync().platformVersionCode >= 1060 && window.qg.reportMonitor("game_scene", 0)
    }
    showInstertView() { }
    openSplashAd() { }
    openRewardVideo() {
      this.showRewardVideo()
    }
    getIntertCount() {
      let e = g.GetLocalData("instertCount");
      return null != e && "" != e || (e = 0), parseInt(e)
    }
    getIsShowInstert() {
      let e = (new Date).getDate(),
        t = 0,
        i = g.GetLocalData("curDay");
      return null == i || "" == i || e != i ? (g.SetLocalData("curDay", e), g.SetLocalData("instertCount", 100), t = 8) : t = this.getIntertCount(), t
    }
    subInstertCount() {
      let e = this.getIntertCount();
      0 != e && (e--, g.SetLocalData("instertCount", e))
    }
    init() {
      let e = this;
      qg.initAdService({
        appId: this.AppId,
        isDebug: !1,
        success: e => {
          this.loadRewardVide()
        },
        fail: e => { },
        complete: e => { }
      }), this.advertising = !0;
      let t = new Date,
        i = t.getMonth() + 1,
        o = t.getDate(),
        a = t.getHours(),
        s = 5e3;
      11 == i && o <= 25 && a <= 11 && (s = 6e4), Laya.timer.once(s, e, () => {
        e.NativeInit = !0, e.bannerInit = !0, console.log("初始化广告", n.IpLock), e.showOppoBanner(!0), e.initNative(0), e.initNative(1), e.initNative(2), e.initNative(3)
      })
    }
    showOppoBanner(e) {
      this.bannerInit && (q.gameView && q.gameView.game_native.visible || (this.bannerAd ? e ? this.bannerAd.show() : this.bannerAd.hide() : (this.bannerAd = window.qg.createBannerAd({
        adUnitId: this.BannerId
      }), e && this.bannerAd.show())))
    }
    loadRewardVide() {
      if (this.VoideErrCount >= this.ErrZCount) return console.log("加载超时-----video");
      if (this.clearRewardVideo(), null == this.videoAd) {
        let e = qg.createRewardedVideoAd({
          adUnitId: this.RewardedVideoId
        });
        e.load(), e.onLoad(() => {
          console.log("激励视频加载成功"), this.isCachedVideo = !0, this.VoideErrCount = 0
        });
        let t = this;
        e.onError(e => {
          console.log("激励视频打开失败" + JSON.stringify(e)), AndroidToJs.CallJs("Advertisement", "5,0"), this.clearRewardVideo(), this.VoideErrCount++, Laya.timer.once(2e3, t, () => {
            this.loadRewardVide()
          })
        }), e.onVideoStart(() => {
          console.log("激励视频 开始播放")
        }), e.onClose(e => {
          n.isSoundOn && I.playBGM(), e.isEnded ? (console.log("激励视频广告完成，发放奖励"), AndroidToJs.CallJs("Advertisement", "5,1")) : (console.log("激励视频广告取消关闭，不发放奖励"), q.showAlert("与奖励擦肩而过了！"), AndroidToJs.CallJs("Advertisement", "5,0")), this.clearRewardVideo(), setTimeout(() => {
            this.loadRewardVide()
          }, 200)
        }), this.videoAd = e
      }
    }
    showRewardVideo() {
      this.videoAd && this.isCachedVideo && (this.isCachedVideo = !1, this.videoAd.show())
    }
    clearRewardVideo() {
      this.videoAd && (this.videoAd.offError(() => { }), this.videoAd.offLoad(() => { }), this.videoAd.offRewarded(() => { }), this.videoAd.offVideoStart(() => { }), this.videoAd.destroy(), this.videoAd = null)
    }
    getIsCachedVideo() {
      return this.isCachedVideo
    }
    loadInsert(e, t) { }
    openVibrate() {
      qg.vibrateShort({
        success: () => { },
        fail: () => { },
        complete: () => {
          console.log("openVibrate   complete")
        }
      })
    }
    openVibrateShort() {
      qg.vibrateShort({
        success: () => { },
        fail: () => { },
        complete: () => { }
      })
    }
    openVibrateLong() {
      window.qg.vibrateLong({
        success: e => {
          console.log("openVibrateLong   success"), console.log(JSON.stringify(e))
        },
        fail: e => {
          console.log("openVibrateLong   fail"), console.log(JSON.stringify(e))
        },
        complete: e => {
          console.log("openVibrateLong   complete"), console.log(JSON.stringify(e))
        }
      })
    }
    playMusic(e, t = 0) {
      if (null == this.audio) {
        var i = qg.createInnerAudioContext();
        i.loop = 0 == t, i.autoplay = !1;
        var o = function () {
          i.play(), i.offCanplay(o)
        };
        i.onCanplay(o), i.src = e, this.audio = i
      } else this.audio.play()
    }
    stopMusic() {
      this.audio && this.audio.pause(), this.audio = null, Laya.SoundManager.stopMusic()
    }
    playSound(e, t = 1) {
      if (r.musicState) {
        var i = qg.createInnerAudioContext();
        i.loop = !1, i.autoplay = !1;
        var o = function () {
          i.play(), i.offCanplay(o)
        };
        i.onCanplay(o), i.src = e
      }
    }
    checkIsMiGame(e) {
      qg.getSystemInfo({
        success: t => {
          t.platformVersion >= 1044 ? e(1) : e(2)
        },
        fail: () => { },
        complete: () => { }
      })
    }
    openGame(e) {
      qg.navigateToMiniGame({
        pkgName: e
      })
    }
    sendDesktop(e) {
      window.qg.installShortcut({
        success: function (t) {
          e(1)
        },
        fail: function (t) {
          e(0)
        },
        complete: function (e) { }
      })
    }
    getIsDesktop() {
      return !0
    }
    hasShortcutInstalled(e) {
      qg.getSystemInfo({
        success: t => {
          t.platformVersion >= 1044 ? qg.hasShortcutInstalled({
            success: t => {
              e(t)
            },
            fail: () => { },
            complete: () => { }
          }) : e(0)
        },
        fail: () => { },
        complete: () => { }
      })
    }
    initNative(e) {
      var t = this;
      if (t.NativeInit && window.qg.createNativeAd) {
        if (!t.nativeAd[e]) {
          t.nativeAd[e] = window.qg.createNativeAd({
            posId: t.NativeId[e]
          });
          let i = o => {
            if (o && o.adList) {
              console.log("原生广告拉取成功");
              let i = o.adList.pop();
              t.nativeAd[e].reportAdShow({
                adId: i.adId.toString()
              }), t.Reported("原生" + e, t.NativeId[e], n.VALUE.VIEW), t.nativeCurrentAdList[e] = i;
              let a = t.nativeCurrentAdList[e].imgUrlList.pop();
              3 == e && ((a = t.nativeCurrentAdList[e].iconUrlList.pop()) && "" != a || (a = t.nativeCurrentAdList[e].imgUrlList.pop())), a && "" != a || (a = t.nativeCurrentAdList[e].iconUrlList.pop()), t.nativeAdImage[e] = new Laya.Sprite, t.nativeAdImage[e].loadImage(a, Laya.Handler.create(this, () => { })), 3 == e && t.iconState && q.gameView.showIcon(), 0 == e && t.BannerState && q.gameView.showNative()
            }
            t.nativeAd[e].offLoad(i)
          };
          t.nativeAd[e].onLoad(i), t.nativeAd[e].onError(t => {
            console.log("原生广告拉取失败", e, JSON.stringify(t))
          })
        }
        t.nativeAd[e].load()
      }
    }
    showNativeInsert(e, t = 0) {
      if (!n.Insert) return;
      var i = this;
      if (!i.nativeCurrentAdList[t]) {
        i.loadNativeAd(t);
        for (let e = 0; e < i.nativeCurrentAdList.length; e++) i.nativeCurrentAdList[e] && (t = e)
      }
      let o = e.getChildByName("close"),
        a = e.getChildByName("ad"),
        s = e.getChildByName("bg"),
        r = e.getChildByName("adlook");
      if (o.mouseThrough = !0, this.nativeCurrentAdList[t]) {
        let o = this.nativeCurrentAdList[t].adId,
          h = this.nativeAdImage[t];
        e.getChildByName("title"), e.getChildByName("desc"), this.nativeCurrentAdList[t].title.length;
        a.removeChildren(0), a.addChild(h), h.height = a.height, h.width = a.width;
        a.width, a.height;
        s.offAll(), s.on(Laya.Event.MOUSE_UP, h, () => {
          i.nativeAd && (i.nativeAd[t].reportAdClick({
            adId: o.toString()
          }), i.Reported("原生" + t, i.NativeId[t], n.VALUE.CLICK), i.nativeAd[t] = null, i.nativeCurrentAdList[t] = null), e.visible = !1, i.initNative(t)
        }), r.active = !1, r.on(Laya.Event.MOUSE_UP, h, () => {
          i.nativeAd && (i.nativeAd[t].reportAdClick({
            adId: o.toString()
          }), i.Reported("原生" + t, i.NativeId[t], n.VALUE.CLICK), i.nativeAd[t] = null, i.nativeCurrentAdList[t] = null), e.visible = !1, i.initNative(t)
        }), e.visible = !0
      } else this.initNative(t), e.visible = !1
    }
    showNativeInBox(e, t, i) {
      var o = this;
      t.visible = !1;
      let a = t.getChildByName("ad"),
        s = t.getChildByName("bg"),
        r = t.getChildByName("adlook"),
        h = t.getChildByName("close");
      if (s.visible = !1, this.nativerIdex = e, h.mouseThrough = !1, h.on(Laya.Event.MOUSE_UP, h, () => {
        t.visible = !1, o.initNative(e), "game_Icon" == t.name && (o.iconState = !1, q.gameView.shut = !1), "game_native" == t.name && (o.BannerState = !1)
      }), window.qg.createNativeAd && this.NativeInit) {
        if (!this.nativeCurrentAdList[e]) return o.initNative(e), !0; {
          t.width, t.height;
          let i = this.nativeCurrentAdList[e].adId,
            s = (this.nativeCurrentAdList[e].icon, this.nativeCurrentAdList[e].imgUrlList.pop(), this.nativeAdImage[e]),
            h = new Laya.Sprite;
          s.addChild(h);
          let l = t.getChildByName("title"),
            d = t.getChildByName("desc");
          l.text = o.nativeCurrentAdList[e].title, d.text = o.nativeCurrentAdList[e].desc, l.visible = !1, d.visible = !1, a.addChild(s), o.showOppoBanner(!1), s.height = a.height, s.width = a.width, s.pivot(s.width / 2, s.height / 2);
          let p = a.width / 2,
            c = a.height / 2;
          s.pos(p, c), a.offAll(), r.offAll();
          let g = () => {
            o.nativeAd[e] && (o.nativeAd[e].reportAdClick({
              adId: i.toString()
            }), o.Reported("原生" + e, o.NativeId[e], n.VALUE.CLICK), o.nativeAd[e] = null, o.nativeCurrentAdList[e] = null), t.visible = !1, o.initNative(e)
          };
          if ("game_Icon" == t.name || "game_native" == t.name)
            if (n.IconMouse && n.IconMouse.length > 0)
              for (let e = 0; e < n.IconMouse.length; e++) "0" == n.IconMouse[e] ? (a.on(Laya.Event.CLICK, o, g), r.on(Laya.Event.CLICK, o, g)) : "1" == n.IconMouse[e] ? (a.on(Laya.Event.MOUSE_DOWN, o, g), r.on(Laya.Event.MOUSE_DOWN, o, g)) : "2" == n.IconMouse[e] ? (a.on(Laya.Event.MOUSE_MOVE, o, g), r.on(Laya.Event.MOUSE_MOVE, o, g)) : "3" == n.IconMouse[e] && (a.on(Laya.Event.MOUSE_UP, o, g), r.on(Laya.Event.MOUSE_UP, o, g));
            else a.on(Laya.Event.MOUSE_DOWN, o, g), r.on(Laya.Event.MOUSE_DOWN, o, g);
          else if (n.mouseEvent && n.mouseEvent.length > 0)
            for (let e = 0; e < n.mouseEvent.length; e++) "0" == n.mouseEvent[e] ? (a.on(Laya.Event.CLICK, o, g), r.on(Laya.Event.CLICK, o, g)) : "1" == n.mouseEvent[e] ? (a.on(Laya.Event.MOUSE_DOWN, o, g), r.on(Laya.Event.MOUSE_DOWN, o, g)) : "2" == n.mouseEvent[e] ? (a.on(Laya.Event.MOUSE_MOVE, o, g), r.on(Laya.Event.MOUSE_MOVE, o, g)) : "3" == n.mouseEvent[e] && (a.on(Laya.Event.MOUSE_UP, o, g), r.on(Laya.Event.MOUSE_UP, o, g));
          else a.on(Laya.Event.MOUSE_DOWN, o, g), r.on(Laya.Event.MOUSE_DOWN, o, g);
          "game_Icon" == t.name && (o.iconState = !0), "game_native" == t.name && (o.BannerState = !0), t.visible = !0
        }
      } else i(!0)
    }
    Reported(e, t, i) {
      h.Reported(e, i, t)
    }
    showGongge() {
      if (qg.getSystemInfoSync().platformVersionCode >= 1076) {
        var e = this;
        null == e.gamePortalAd && (e.gamePortalAd = window.qg.createGamePortalAd({
          adUnitId: e.oppoGonggeId
        }), e.gamePortalAd ? (e.gamePortalAd.load().then(function () {
          console.log("加载进行时")
        }).catch(function (e) {
          console.log("加载啥情况", e.errCode, "和", e.errMsg)
        }), e.gamePortalAd.onLoad(function () {
          console.log("互推盒子九宫格广告加载成功"), e.gamePortalAd.show(), e.showOppoBanner(!1), 0 == e.nativerIdex && (e.nativerIdex = -3)
        }), e.gamePortalAd.onError(t => {
          console.log("加载失败 ", JSON.stringify(t)), q.showAlert("游戏正在路上！客官请稍后！"), e.gamePortalAd.destroy(), e.gamePortalAd = null
        }), e.gamePortalAd.onClose(function () {
          e.gamePortalAd.destroy(), e.gamePortalAd = null, -3 == e.nativerIdex && q.gameView.showNative()
        })) : console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API"))
      }
    }
  }
  class K extends l {
    constructor() {
      super(...arguments), this.BannerId = "2wqo8wchis6djn56on", this.RewardedVideoId = "2dl7fa8o47137mj386", this.InsertId = "141xtolhd3tbh1800g", this.bannerAd = null, this.videoAd = null, this.isCachedVideo = !1, this.recorder = null, this.insertAd = null, this.gameBanner = null, this.showAlert = function (e, t = "提示", i = null) {
        window.tt.showToast({
          title: e,
          icon: "none"
        })
      }, this.ShareVideo = function (e) {
        console.log("点击");
        var t = this;
        t.recorder = tt.getGameRecorderManager(), window.isRecord ? (window.isRecord = !1, e && (e.visible = !1), window.recordDone ? (Laya.timer.clearAll(this), t.recorder.onStop(e => {
          window.tt.shareAppMessage({
            channel: "video",
            extra: {
              videoPath: e.videoPath
            },
            success() {
              window.tt.showToast({
                title: "发布成功"
              })
            },
            fail() { }
          })
        }), t.recorder.stop()) : (Laya.timer.clearAll(this), t.recorder.stop(), window.tt.showToast({
          title: "需要录制3秒以上",
          icon: "none"
        }))) : (window.isRecord = !0, window.recordDone = !1, t.recorder.start({
          duration: 300
        }), e && (e.visible = !0), t.showAlert("开始录制..."), Laya.timer.once(3e3, this, () => {
          window.recordDone = !0
        }), Laya.timer.once(299e3, this, () => {
          t.recorder.pause(), t.showAlert("    录制已达最大时长\n再次点击录屏按钮即可分享"), e && (e.visible = !1)
        }))
      }
    }
    openVibrate() { }
    openAdvert(e) {
      switch (e) {
        case 8:
          this.openSplashAd();
          break;
        case 5:
          this.openRewardVideo()
      }
    }
    openVibrateShort() {
      tt.vibrateShort({
        success(e) { },
        fail(e) {
          console.log("vibrateShort调用失败")
        }
      })
    }
    openVibrateLong() {
      tt.vibrateLong({
        success(e) { },
        fail(e) {
          console.log("vibrateShort调用失败")
        }
      })
    }
    openSplashAd() {
      this.loadVideo()
    }
    getIsCachedVideo() {
      return this.isCachedVideo
    }
    loadVideo() {
      console.log("loadVideo =-===================================");
      let e = this;
      if (null == this.videoAd) {
        let t = tt.createRewardedVideoAd({
          adUnitId: this.RewardedVideoId
        });
        this.videoAd = t, t.onLoad(() => {
          console.log("激励视频  加载成功 -- "), this.isCachedVideo = !0
        }), t.onError(t => {
          console.log("激励视频加载失败 -- " + JSON.stringify(t)), AndroidToJs.CallJs("Advertisement", "5,0"), Laya.timer.once(1e3, e, () => {
            this.loadVideo()
          })
        }), t.onClose(e => {
          e.isEnded ? (AndroidToJs.CallJs("Advertisement", "5,1"), this.loadVideo()) : AndroidToJs.CallJs("Advertisement", "5,0")
        })
      } else this.videoAd.load().then(() => {
        this.isCachedVideo = !0, console.log("手动加载成功")
      }).catch(t => {
        console.log("广告组件出现问题", t), AndroidToJs.CallJs("Advertisement", "5,0"), Laya.timer.once(1e3, e, () => {
          this.loadVideo()
        })
      })
    }
    openRewardVideo() {
      let e = this;
      this.videoAd && this.videoAd.show().then(() => {
        console.log("openRewardVideo  广告显示成功")
      }).catch(t => {
        console.log("openRewardVideo  广告组件出现问题", t), AndroidToJs.CallJs("Advertisement", "5,0"), Laya.timer.once(1e3, e, () => {
          this.loadVideo()
        })
      })
    }
    createMoreGameBtn() {
      if (console.log("创建图片"), !window.tt.createMoreGamesButton) return;
      let e = window.tt.getSystemInfoSync();
      window.tt.createMoreGamesButton({
        type: "image",
        image: "game/moregame.png",
        style: {
          left: 0,
          top: e.screenHeight / 3 - 100,
          width: 45,
          height: 100,
          lineHeight: 0,
          backgroundColor: "#ff0000",
          textColor: "#ffffff",
          textAlign: "center",
          fontSize: 16,
          borderRadius: 4,
          borderWidth: 0,
          borderColor: "#ff0000"
        },
        appLaunchOptions: [{
          appId: "ttXXXXXX",
          query: "foo=bar&baz=qux",
          extraData: {}
        }],
        onNavigateToMiniGame(e) {
          console.log("跳转其他小游戏", e)
        }
      }).onTap(() => {
        console.log("点击更多游戏")
      })
    }
    createMoreGameImgBtn(e, t, i) {
      if (console.log("创建图片"), !window.tt.createMoreGamesButton) return;
      window.tt.getSystemInfoSync();
      window.tt.createMoreGamesButton({
        type: "image",
        image: e,
        style: {
          left: t,
          top: i,
          width: 50,
          height: 50,
          lineHeight: 0,
          backgroundColor: "#ff0000",
          textColor: "#ffffff",
          textAlign: "center",
          fontSize: 16,
          borderRadius: 4,
          borderWidth: 0,
          borderColor: "#ff0000"
        },
        appLaunchOptions: [{
          appId: "ttXXXXXX",
          query: "foo=bar&baz=qux",
          extraData: {}
        }],
        onNavigateToMiniGame(e) {
          console.log("跳转其他小游戏", e)
        }
      }).onTap(() => {
        console.log("点击更多游戏")
      })
    }
    createMoreGamesBanner(e) { }
    AutoRecordVideo(e, t) {
      let i = this;
      switch (null == i.recorder && (i.recorder = tt.getGameRecorderManager()), e) {
        case "start":
          Laya.timer.clearAll(i), window.isRecording = !0, window.recordDone = !1, i.recorder.start({
            duration: 300
          }), Laya.timer.once(3e3, i, () => {
            window.recordDone = !0
          }), Laya.timer.once(299e3, i, () => {
            i.recorder.pause()
          }), t(!1);
          break;
        case "pause":
          Laya.timer.clearAll(i), window.isRecording && i.recorder.pause(), t(!1);
          break;
        case "stop":
          window.recordDone ? (i.recorder = tt.getGameRecorderManager(), i.recorder.onStop(e => {
            tt.shareAppMessage({
              channel: "video",
              extra: {
                videoPath: e.videoPath
              },
              success() {
                t(!0)
              },
              fail() {
                t(!1)
              }
            }), i.videoPath = e.videoPath
          }), i.recorder && i.videoPath && tt.shareAppMessage({
            channel: "video",
            extra: {
              videoPath: i.videoPath
            },
            success() {
              t(!0)
            },
            fail() {
              t(!1)
            }
          }), i.recorder.stop()) : (console.log("stop1"), i.recorder.stop(), window.tt.showToast({
            title: "需要录制3秒以上",
            icon: "none"
          }));
          break;
        case "destroy":
          i.recorder.onStop(e => {
            e.videoPath = null
          }), i.recorder.stop(), i.videoPath = null, t(!1)
      }
    }
    loadInsert(e, t) {
      if (console.log("插屏"), window.tt.createInterstitialAd) {
        let e = window.tt.createInterstitialAd({
          adUnitId: this.InsertId
        });
        e.load(), e.show().catch(e => {
          t(!1)
        })
      } else t(!1)
    }
    createLupingBtn() {
      var e = this,
        t = new Laya.Sprite;
      t.loadImage("res/lupin.png", Laya.Handler.create(Laya.stage, () => {
        Laya.stage.addChild(t), t.zOrder = 1002, t.pivot(t.width / 2, t.height / 2), t.pos(Laya.stage.width - 70, Laya.stage.height / 3);
        var i = new Laya.Sprite;
        i.loadImage("res/red.png", Laya.Handler.create(Laya.stage, () => {
          t.addChild(i), i.x = 4 * i.width, i.y = i.height, i.visible = !1
        })), t.on(Laya.Event.MOUSE_UP, Laya.stage, () => {
          e.ShareVideo(i)
        }), t.scale(.8, .8)
      }))
    }
  }
  class F extends l {
    constructor() {
      super(...arguments), this.AppId = "100008471", this.OpenScreenId = "cd96ae51f2aa4c28a6d055bc97499779", this.BannerId = "23d490d514584ed4841c95935c9a602e", this.RewardedVideoId = "afbc2c6ee38b44e8895d438a13a1baeb", this.InsertId = "1ab23682d16c423a83f95c1bc368e37f", this.NativeId = "3d43b5eb60cd45078fb91f2a87919415", this.BannerErrCount = 0, this.VoideErrCount = 0, this.InsertErrCount = 0, this.ErrZCount = 3, this.isCachedVideo = !1, this.isCachedInsert = !1, this.nativeAd = null, this.nativeCurrentAdList = null, this.nativeAdImage = null
    }
    openSplashAd() {
      this.initOppoAd()
    }
    initOppoAd() {
      this.loadRewardVide(), Laya.timer.once(1e4, this, () => {
        this.openBannerView(), this.initNatives()
      });
      try {
        this.systemInfo = window.qg.getSystemInfoSync()
      } catch (e) {
        window.qg.getSystemInfo({
          success(e) {
            this.systemInfo = e
          }
        })
      }
    }
    openVibrate() {
      qg.vibrateLong({
        success: e => {
          console.log("openVibrateLong   success"), console.log(JSON.stringify(e))
        },
        fail: e => {
          console.log("openVibrateLong   fail"), console.log(JSON.stringify(e))
        },
        complete: e => {
          console.log("openVibrateLong   complete"), console.log(JSON.stringify(e))
        }
      })
    }
    openAdvert(e) {
      switch (e) {
        case 8:
          this.initOppoAd();
          break;
        case 5:
          this.showRewardVideo();
          break;
        case 3:
          this.showInstertView()
      }
    }
    openBannerView() {
      if (!(this.systemInfo.screenWidth / this.systemInfo.screenHeight > .5)) {
        if (this.clearBanner(), this.BannerErrCount >= this.ErrZCount) return console.log("加载超时-----banner");
        if (null == this.bannerAd) {
          var e = qg.createBannerAd({
            posId: this.BannerId,
            style: {}
          });
          e.show(), e.onLoad(() => {
            console.log("Banner广告加载成功"), e.show(), this.BannerErrCount = 0
          }), e.onError(e => {
            console.log("Banner广告加载失败"), console.log(JSON.stringify(e)), this.BannerErrCount++
          }), e.onClose(() => {
            console.log("bannerAd 关闭"), setTimeout(() => {
              this.openBannerView()
            }, 5e3)
          }), this.bannerAd = e
        }
      }
    }
    clearBanner() {
      this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null)
    }
    loadRewardVide() {
      if (null != qg.createRewardedVideoAd) {
        if (this.VoideErrCount >= this.ErrZCount) return console.log("加载超时-----video");
        if (null == this.videoAd) {
          let e = qg.createRewardedVideoAd({
            posId: this.RewardedVideoId
          });
          e.onLoad(() => {
            console.log("激励视频加载成功"), this.isCachedVideo = !0, this.VoideErrCount = 0
          }), e.onError(e => {
            console.log("激励视频播放失败" + JSON.stringify(e)), AndroidToJs.CallJs("Advertisement", "5,0"), this.VoideErrCount++, setTimeout(() => {
              this.loadRewardVide()
            }, 2e3)
          }), e.onClose(e => {
            e && e.isEnded ? (console.log("正常播放结束，可以下发游戏奖励"), AndroidToJs.CallJs("Advertisement", "5,1")) : (console.log("播放中途退出，不下发游戏奖励"), q.showAlert("与奖励擦肩而过了！"), AndroidToJs.CallJs("Advertisement", "5,0")), setTimeout(() => {
              this.loadRewardVide()
            }, 2e3)
          }), this.videoAd = e
        } else this.videoAd.load().then(() => {
          console.log("激励视频广告加载成功"), this.isCachedVideo = !0, this.VoideErrCount = 0
        }).catch(e => {
          console.log("激励视频广告加载失败", e), this.VoideErrCount++, setTimeout(() => {
            this.loadRewardVide()
          }, 1e3)
        })
      }
    }
    getIsCachedVideo() {
      return console.log("getIsCachedVideo" + this.isCachedVideo), this.isCachedVideo
    }
    showRewardVideo() {
      this.videoAd && this.isCachedVideo && (this.stopMusic(), this.isCachedVideo = !1, this.videoAd.show())
    }
    clearRewardVideo() {
      this.videoAd && (this.videoAd = null)
    }
    loadInsert(e, t) {
      console.log("插屏");
      var i = this;
      i.insertAd = qg.createInterstitialAd({
        posId: i.InsertId
      }), i.insertAd.load(), i.insertAd.onLoad(function () {
        if (e) {
          let e = i.insertAd.show();
          e && e.then(() => {
            console.log("插屏成功")
          }).catch(e => {
            switch (t(!1), e.code) {
              case 30003:
                console.log("新用户1天内不能曝光Banner，请将手机时间调整为1天后，退出游戏重新进入");
                break;
              case 30009:
                console.log("10秒内调用广告次数超过1次，10秒后再调用");
                break;
              case 30002:
                console.log("load广告失败，重新加载广告");
                break;
              default:
                console.log("插屏广告展示失败")
            }
          })
        }
      }), i.insertAd.onClose(function () {
        t(!0)
      })
    }
    sendDesktop(e) { }
    hasShortcutInstalled(e) { }
    openVibrateShort() {
      qg.vibrateShort({
        success: () => { },
        fail: () => { },
        complete: () => { }
      }), qg.vibrateShort({
        success: () => { },
        fail: () => { },
        complete: () => { }
      })
    }
    openVibrateLong() {
      qg.vibrateLong({
        success: e => { },
        fail: e => { },
        complete: e => { }
      })
    }
    initNatives() {
      var e = this;
      if (window.qg.createNativeAd) {
        let t = window.qg.createNativeAd({
          posId: e.NativeId
        });
        t.load(), t.onLoad(function (i) {
          if (i && i.adList) {
            console.log("重新拉取成功");
            let o = i.adList.pop();
            t.reportAdShow({
              adId: o.adId.toString()
            }), e.nativeAd = t, e.nativeCurrentAdList = o;
            let n = e.nativeCurrentAdList.imgUrlList.pop();
            n && (e.nativeAdImage = new Laya.Sprite, e.nativeAdImage.loadImage(n, Laya.Handler.create(this, () => { })))
          }
        })
      }
    }
    vivoNative(e, t) {
      console.log("原生");
      var i = this;
      let o = e.getChildByName("close"),
        n = e.getChildByName("ad"),
        a = e.getChildByName("bg"),
        s = e.getChildByName("adlook"),
        r = e.getChildByName("title"),
        h = e.getChildByName("desc");
      if (o.on(Laya.Event.CLICK, i, () => {
        e.visible = !1, t(!0)
      }), o.mouseThrough = !1, window.qg.createNativeAd)
        if (this.nativeCurrentAdList) {
          e.visible = !0;
          let o = this.nativeCurrentAdList.adId,
            l = (this.nativeCurrentAdList.icon, this.nativeCurrentAdList.imgUrlList.pop(), this.nativeCurrentAdList.title.length);
          this.nativeCurrentAdList.desc.length < 20 && (h.text = this.nativeCurrentAdList.desc), l < 12 && (r.text = this.nativeCurrentAdList.title);
          let d = this.nativeAdImage;
          r.text = this.nativeCurrentAdList.title, n.addChild(d), d.height = n.height, d.width = n.width, d.pivot(d.width / 2, d.height / 2);
          let p = n.width / 2,
            c = n.height / 2;
          d.pos(p, c), d.on(Laya.Event.MOUSE_UP, d, () => {
            i.nativeAd && (i.nativeAd.reportAdClick({
              adId: o.toString()
            }), i.nativeAd = null, i.nativeCurrentAdList = null), e.visible = !1, t(!0), i.initNatives()
          }), n.on(Laya.Event.MOUSE_UP, n, () => {
            i.nativeAd && (i.nativeAd.reportAdClick({
              adId: o.toString()
            }), i.nativeAd = null, i.nativeCurrentAdList = null), e.visible = !1, t(!0), i.initNatives()
          }), s.on(Laya.Event.MOUSE_UP, s, () => {
            i.nativeAd && (i.nativeAd.reportAdClick({
              adId: o.toString()
            }), i.nativeAd = null, i.nativeCurrentAdList = null), e.visible = !1, t(!0), i.initNatives()
          }), a.on(Laya.Event.MOUSE_UP, a, () => {
            i.nativeAd && (i.nativeAd.reportAdClick({
              adId: o.toString()
            }), i.nativeAd = null, i.nativeCurrentAdList = null), e.visible = !1, t(!0), i.initNatives()
          }), e.visible = !0
        } else this.initNatives();
      else t(!0), i.initNatives()
    }
  }
  class j extends l {
    constructor() {
      super(...arguments), this.BannerId = "ad480a6eed783867c753f624897d54dd", this.RewardedVideoId = "94e94f0d5708ddf733abafdb85c94f18", this.InsertId = "eb0a02e8c7621c5ea38e347ec2a3fc0d", this.BoxId = "e71a79ff4bb318e1c4786af43afce791", this.qqBlockAdId = "58f231b3e569612012a18f08a9bbe68f", this.feedsId = "071206d278bfd19bb5e075f154dc4d03", this.cardAdId = "bb7050a14dc816e35e6dfecc136a51ee", this.qqBlockAd = null, this.isCachedVideo = !1, this.isBannerChange = !1, this.boxisShow = !0
    }
    init() {
      y.RegistEvent("Active", this, this.onActiveHandle);
      try {
        this.systemInfo = qq.getSystemInfoSync(), console.log(this.systemInfo)
      } catch (e) {
        qq.getSystemInfo({
          success(e) {
            this.systemInfo = e
          }
        })
      }
      qq.showShareMenu({
        showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
      }), qq.onShareAppMessage(() => ({
        title: "维护正义就靠你了！",
        imageUrl: "https://cdn.ipbegin.com/Game/03Assassin/shareImage.png"
      }))
    }
    openVibrateLong() {
      qq.vibrateShort({
        fail: e => {
          qq.vibrateLong({})
        }
      })
    }
    playMusic(e, t = 0) {
      if (null == this.audio) {
        const t = qq.createInnerAudioContext();
        t.src = "/" + e, t.autoplay = !1, t.loop = !0;
        var i = function () {
          t.play(), t.offCanplay(i)
        };
        t.onCanplay(i), this.audio = t
      } else this.audio.play()
    }
    onActiveHandle() {
      this.audio && this.audio.play()
    }
    stopMusic() {
      this.audio && this.audio.pause()
    }
    playSound(e) {
      if (!r.musicState) return;
      let t = qq.createInnerAudioContext();
      t.src = "/" + e, t.autoplay = !1;
      let i = function () {
        t.play(), t.offCanplay(i)
      };
      t.onCanplay(i)
    }
    openAdvert(e) {
      switch (e) {
        case 8:
          setTimeout(() => {
            this.openBanner()
          }, 2e3), this.loadRewardVideo();
          break;
        case 5:
          this.showRewardVideo()
      }
    }
    openBanner() {
      if (this.bannerAd) return;
      if (this.systemInfo.windowWidth / this.systemInfo.windowHeight > .5) return;
      let e = qq.createBannerAd({
        adUnitId: this.BannerId,
        style: {
          width: 300,
          height: 72,
          left: 0,
          top: this.systemInfo.windowHeight
        }
      });
      this.bannerAd = e, e.onResize(t => {
        this.isBannerChange || (this.isBannerChange = !0, e.style.top = this.systemInfo.windowHeight - t.height - 10, e.style.left = this.systemInfo.windowWidth / 2 - t.width / 2)
      }), e.onLoad(() => {
        e.show()
      }), e.onError(e => {
        e.errCode != O.c1004 && e.errCode != O.c1003 || (this.clearBanner(), setTimeout(() => {
          this.openBanner()
        }, 1e4))
      })
    }
    clearBanner() {
      this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null)
    }
    loadRewardVideo() {
      if (null == this.videoAd) {
        console.log("loadRewardVideo");
        let e = qq.createRewardedVideoAd({
          adUnitId: this.RewardedVideoId
        });
        e.onClose(e => {
          e.isEnded ? (AndroidToJs.CallJs("Advertisement", "5,1"), console.log("发放奖励")) : AndroidToJs.CallJs("Advertisement", "5,0"), setTimeout(() => {
            this.loadRewardVideo()
          }, 2e3)
        }), e.onError(e => {
          console.log("video加载失败    " + JSON.stringify(e)), e.errCode != O.c1004 && e.errCode != O.c1003 || (this.clearRewardVideo(), setTimeout(() => {
            this.loadRewardVideo()
          }, 1e4))
        }), e.onLoad(() => {
          console.log("video 加载成功"), this.isCachedVideo = !0
        }), this.videoAd = e
      } else this.videoAd.load()
    }
    showRewardVideo() {
      this.isCachedVideo = !1, this.videoAd.show()
    }
    clearRewardVideo() { }
    getIsCachedVideo() {
      return this.isCachedVideo
    }
    loadInsert(e, t) {
      if (console.log("开始拉插屏"), window.qq.createInterstitialAd) {
        let e = window.qq.createInterstitialAd({
          adUnitId: this.InsertId
        });
        e.load().catch(e => {
          console.error("load", e)
        }), e.onLoad(() => {
          console.log("onLoad event emit")
        }), e.onClose(() => {
          console.log("close event emit")
        }), e.onError(e => {
          console.log("error", e)
        }), console.log("准备展示插屏"), e.show().catch(e => {
          console.error("show", e)
        })
      }
    }
    showQQBox() {
      this.boxisShow ? (this.qqbox = window.qq.createAppBox({
        adUnitId: this.BoxId
      }), this.qqbox.load().then(() => {
        this.boxisShow = !0, this.qqbox.show()
      })) : this.qqbox && (this.boxisShow = !1, this.qqbox.destroy())
    }
    intQQBlockAd(e = !0) {
      if (null != window.qq.createBlockAd)
        if (console.log("QQBlockAd"), e) {
          if (null == this.qqBlockAd) {
            let e, t = window.qq.getSystemInfoSync();
            e = (t.windowWidth, t.windowHeight, t.windowHeight), this.qqBlockAd = window.qq.createBlockAd({
              adUnitId: this.qqBlockAdId,
              size: 5,
              orientation: "landscape",
              style: {
                left: 20,
                top: 150
              }
            }), this.qqBlockAd.onError(e => {
              console.log(e)
            }), this.qqBlockAd.show()
          }
        } else null != this.qqBlockAd && (this.qqBlockAd.destroy(), this.qqBlockAd = null)
    }
    openVibrateShort() {
      window.qq.vibrateShort({
        success: () => {
          console.log("openVibrateShort   success")
        },
        fail: () => {
          console.log("openVibrateShort   fail")
        },
        complete: () => {
          console.log("openVibrateShort   complete")
        }
      })
    }
  } ! function (e) {
    e[e.c1000 = 1e3] = "c1000", e[e.c1001 = 1001] = "c1001", e[e.c1002 = 1002] = "c1002", e[e.c1003 = 1003] = "c1003", e[e.c1004 = 1004] = "c1004", e[e.c1005 = 1005] = "c1005", e[e.c1006 = 1006] = "c1006", e[e.c1007 = 1007] = "c1007", e[e.c1008 = 1008] = "c1008"
  }(O || (O = {}));
  class Q extends l {
    constructor() {
      super(...arguments), this.BannerId = "adunit-c7dca357b66a4f98", this.RewardedVideoId = "adunit-ba258cdec55edf4a", this.InsertId = "adunit-9f14e6b8a658d8cb", this.BoxId = "adunit-8911a836311be6e3", this.isCachedVideo = !1, this.isBannerChange = !1, this.boxisShow = !0, this.isPlayBgm = !0
    }
    init() {
      try {
        this.systemInfo = window.wx.getSystemInfoSync(), console.log(this.systemInfo)
      } catch (e) {
        window.wx.getSystemInfo({
          success(e) {
            this.systemInfo = e
          }
        })
      }
      window.wx.onShareAppMessage(() => ({
        title: "突袭才是王道！",
        imageUrl: "https://cdn.ipbegin.com/Game/03Assassin/shareImage.png"
      })), window.wx.showShareMenu({
        withShareTicket: !0,
        menus: ["shareAppMessage", "shareTimeline"]
      }), window.wx.onShow(() => {
        this.audio, this.isPlayBgm && this.audio && this.audio.play(), r.musicState && I.playBGM()
      })
    }
    openVibrateLong() {
      window.wx.vibrateShort({
        fail: e => {
          window.wx.vibrateLong({})
        }
      })
    }
    playMusic(e, t = 0) {
      if (r.musicState)
        if (this.isPlayBgm = !0, null == this.audio) {
          const t = window.wx.createInnerAudioContext();
          t.src = e, t.autoplay = !1, t.loop = !0;
          var i = function () {
            t.play(), t.offCanplay(i)
          };
          t.onCanplay(i), this.audio = t
        } else this.audio.play()
    }
    onActiveHandle() {
      this.audio && this.audio.play()
    }
    stopMusic() {
      this.audio && (this.audio.pause(), this.isPlayBgm = !1)
    }
    playSound(e) {
      if (!r.musicState) return;
      let t = window.wx.createInnerAudioContext();
      t.src = e, t.autoplay = !1;
      let i = function () {
        t.play(), t.offCanplay(i)
      };
      t.onCanplay(i)
    }
    openAdvert(e) {
      switch (e) {
        case 8:
          setTimeout(() => {
            this.openBanner()
          }, 2e3), this.loadRewardVideo();
          break;
        case 5:
          this.showRewardVideo()
      }
    }
    openBanner() {
      if (this.bannerAd) return;
      if (this.systemInfo.windowWidth / this.systemInfo.windowHeight > .5) return;
      let e = window.wx.createBannerAd({
        adUnitId: this.BannerId,
        style: {
          width: 300,
          height: 72,
          left: 0,
          top: this.systemInfo.windowHeight
        }
      });
      this.bannerAd = e, e.onResize(t => {
        this.isBannerChange || (this.isBannerChange = !0, e.style.top = this.systemInfo.windowHeight - t.height, e.style.left = this.systemInfo.windowWidth / 2 - t.width / 2)
      }), e.onLoad(() => {
        e.show()
      }), e.onError(e => {
        e.errCode != H.c1004 && e.errCode != H.c1003 || (this.clearBanner(), setTimeout(() => {
          this.openBanner()
        }, 1e4))
      })
    }
    clearBanner() {
      this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null)
    }
    loadRewardVideo() {
      if (null == this.videoAd) {
        console.log("loadRewardVideo");
        let e = window.wx.createRewardedVideoAd({
          adUnitId: this.RewardedVideoId
        });
        e.onClose(e => {
          r.musicState && I.playBGM(), e.isEnded ? (AndroidToJs.CallJs("Advertisement", "5,1"), console.log("发放奖励")) : AndroidToJs.CallJs("Advertisement", "5,0"), setTimeout(() => {
            this.loadRewardVideo()
          }, 2e3)
        }), e.onError(e => {
          console.log("video加载失败    " + JSON.stringify(e)), e.errCode != H.c1004 && e.errCode != H.c1003 || (this.clearRewardVideo(), setTimeout(() => {
            this.loadRewardVideo()
          }, 1e4))
        }), e.onLoad(() => {
          console.log("video 加载成功"), this.isCachedVideo = !0
        }), this.videoAd = e
      } else this.videoAd.load()
    }
    showRewardVideo() {
      this.isCachedVideo = !1, this.videoAd.show()
    }
    clearRewardVideo() { }
    getIsCachedVideo() {
      return this.isCachedVideo
    }
    loadInsert(e, t) {
      let i = this;
      window.wx.createInterstitialAd && (i.insertAd = window.wx.createInterstitialAd({
        adUnitId: i.InsertId
      }), i.insertAd.load(), i.insertAd.onLoad(function () {
        e && (i.insertAd.show(), t(!0))
      }))
    }
    showwxBox(e) {
      let t = this,
        i = window.wx.getSystemInfoSync();
      null == t.wxbox && (t.wxbox = window.wx.createGridAd({
        adUnitId: this.BoxId,
        adTheme: "white",
        gridCount: 5,
        style: {
          left: (i.windowWidth - 280) / 2,
          top: 100,
          width: 180,
          opacity: .8
        }
      })), e ? (t.wxbox.show(), t.wxbox.onError(function (e) {
        console.log(e.errCode, e.errMsg)
      })) : t.wxbox.hide()
    }
    openVibrateShort() {
      window.wx.vibrateShort({
        success: () => {
          console.log("openVibrateShort   success")
        },
        fail: () => {
          console.log("openVibrateShort   fail")
        },
        complete: () => {
          console.log("openVibrateShort   complete")
        }
      })
    }
  } ! function (e) {
    e[e.c1000 = 1e3] = "c1000", e[e.c1001 = 1001] = "c1001", e[e.c1002 = 1002] = "c1002", e[e.c1003 = 1003] = "c1003", e[e.c1004 = 1004] = "c1004", e[e.c1005 = 1005] = "c1005", e[e.c1006 = 1006] = "c1006", e[e.c1007 = 1007] = "c1007", e[e.c1008 = 1008] = "c1008"
  }(H || (H = {}));
  class Z extends l {
    constructor() {
      super(...arguments), this.banner_id = "6850431", this.app_id = "d91f0375", this.video_id = "6850435", this.isCachedVideo = !1
    }
    init() {
      this.system_info = swan.getSystemInfoSync(), console.log("初始化小游戏信息"), console.log(JSON.stringify(this.system_info))
    }
    openAdvert(e) {
      switch (e) {
        case 8:
          this.loadRewardVide();
          break;
        case 2:
          this.openBannerView();
          break;
        case 5:
          this.showRewardVideo()
      }
    }
    openSplashAd() {
      setTimeout(() => {
        this.openBannerView()
      }, 5e3), this.loadRewardVide()
    }
    openBannerView() {
      this._banner && (this._banner.hide(), this._banner.destroy(), this._banner = null);
      let e = swan.createBannerAd({
        adUnitId: this.banner_id,
        appSid: this.app_id,
        style: {
          width: this.system_info.windowWidth,
          top: this.system_info.windowHeight,
          left: 0
        }
      }),
        t = this;
      e.onLoad(function () {
        console.log("加载完成"), e.show()
      }), e.onError(function (e) {
        console.log("加载失败"), console.log(JSON.stringify(e));
        let i = e.errCode;
        i != z.c200000 && i != z.c201000 && i != z.c3010002 && i != z.c3010003 && i != z.c3010004 && i != z.c3010010 || (t.clearBanner(), setTimeout(() => {
          t.openBannerView()
        }, 6e4))
      }), e.style.height = e.style.width / 300 * 50, e.onResize(function (e) {
        console.log(e)
      }), this._banner = e
    }
    clearBanner() {
      this._banner && (this._banner.destroy(), this._banner = null)
    }
    loadRewardVide() {
      if (this._video) return void this._video.load();
      let e = swan.createRewardedVideoAd({
        adUnitId: this.video_id,
        appSid: this.app_id
      });
      e.load();
      let t = this;
      e.onLoad(function () {
        console.log("视频加载完成"), t.isCachedVideo = !0
      }), e.onError(function (e) {
        console.log("视频加载失败"), console.log(JSON.stringify(e));
        let i = e.errCode;
        i != z.c200000 && i != z.c201000 && i != z.c3010002 && i != z.c3010003 && i != z.c3010004 && i != z.c3010008 && i != z.c3010009 || (t.clearRewardVideo(), setTimeout(() => {
          t.loadRewardVide()
        }, 6e4))
      }), e.onClose(function (e) {
        console.log("视频关闭"), e.isEnded ? (console.log("发放奖励"), AndroidToJs.CallJs("Advertisement", "5,1")) : (console.log("视频未看完   不发放奖励"), AndroidToJs.CallJs("Advertisement", "5,0")), t.clearRewardVideo(), t.loadRewardVide()
      }), this._video = e
    }
    showRewardVideo() {
      if (this.isCachedVideo) {
        let e = this;
        this._video.show().then().catch(t => {
          console.log(t), setTimeout(() => {
            e.loadRewardVide()
          }, 6e4)
        }), this.isCachedVideo = !1
      }
    }
    clearRewardVideo() { }
    getIsCachedVideo() {
      return this.isCachedVideo
    }
    openVibrateShort() {
      swan.vibrateShort({
        success: () => { },
        fail: () => { }
      })
    }
    openVibrateLong() {
      swan.vibrateLong({
        success: () => { },
        fail: () => { }
      })
    }
  } ! function (e) {
    e[e.c103010 = 103010] = "c103010", e[e.c103011 = 103011] = "c103011", e[e.c103012 = 103012] = "c103012", e[e.c103020 = 103020] = "c103020", e[e.c107000 = 107e3] = "c107000", e[e.c107001 = 107001] = "c107001", e[e.c107002 = 107002] = "c107002", e[e.c107003 = 107003] = "c107003", e[e.c200000 = 2e5] = "c200000", e[e.c201000 = 201e3] = "c201000", e[e.c3010000 = 301e4] = "c3010000", e[e.c3010002 = 3010002] = "c3010002", e[e.c3010003 = 3010003] = "c3010003", e[e.c3010004 = 3010004] = "c3010004", e[e.c3010005 = 3010005] = "c3010005", e[e.c3010006 = 3010006] = "c3010006", e[e.c3010007 = 3010007] = "c3010007", e[e.c3010008 = 3010008] = "c3010008", e[e.c3010009 = 3010009] = "c3010009", e[e.c3010010 = 3010010] = "c3010010"
  }(z || (z = {})),
    function (e) {
      e[e.None = 0] = "None", e[e.Android = 1] = "Android", e[e.OppoMinGame = 2] = "OppoMinGame", e[e.TTMinGame = 3] = "TTMinGame", e[e.BaiDuMinGame = 4] = "BaiDuMinGame", e[e.VivoMinGame = 5] = "VivoMinGame", e[e.QQMinGame = 6] = "QQMinGame", e[e.WXMinGame = 7] = "WXMinGame", e[e.JsbXiaomiMiniGame = 8] = "JsbXiaomiMiniGame"
    }(J || (J = {}));
  class $ {
    static init(e) {
      this.platform = e;
      let t = new l;
      if (this.platform == J.Android) t = new d;
      else if (this.platform == J.OppoMinGame) {
        t = new W;
        try {
          qg.getLocation({
            success: function (e) {
              console.log("定位获取成功", e), e.latitude = h.latitude, e.longitude = h.longitude, h.pull()
            },
            fail: function (e) {
              console.log("定位获取失败", e), h.pull()
            }
          })
        } catch (e) {
          h.pull()
        }
      } else this.platform == J.TTMinGame && "function" == typeof window.tt.createRewardedVideoAd ? t = new K : this.platform == J.VivoMinGame ? t = new F : this.platform == J.QQMinGame ? t = new j : this.platform == J.WXMinGame ? t = new Q : this.platform == J.BaiDuMinGame ? t = new Z : this.platform == J.JsbXiaomiMiniGame && console.log("小米");
      t.init(), this.Jsb = t
    }
    static initData() {
      let e = g.GetLocalData("uuid");
      null != e && "" != e ? this.userid = e : (this.userid = g.generateUUID(), g.SetLocalData("uuid", this.userid))
    }
  }
  class ee extends e.ReviveViewUI {
    constructor() {
      super()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.bindButtons()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height
    }
    bindButtons() {
      let e = this;
      this.revive_ad.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK)
      }), this.revive_skip.on(Laya.Event.CLICK, this, () => {
        $.Jsb.playSound(n.SOUNDURL.CLICK), e.visible = !1, I.gameLose()
      })
    }
    showNative() { }
  }
  class te extends e.LoadViewUI {
    constructor() {
      super(), this.loadingTxt = ["Loading...", "Loading...", "Loading...", "Loading...", "Loading..."], this.loadResource = ["game/Conventional/SampleScene.lh"], this.loadFinishCount = 0, this.loadingBar.width = 0, this.loadingBarTxt && (this.loadingBarTxt.value = "0"), this.roundTip()
    }
    onAwake() {
      this.initUI()
    }
    onEnable() {
      this.loadResource.length > 0 ? this.proload() : this.loadFinish()
    }
    initUI() {
      this.width = Laya.stage.width, this.height = Laya.stage.height
    }
    bindButtons() { }
    roundTip() {
      let e = Math.floor(Math.random() * (this.loadingTxt.length - .01));
      this.load_txt && this.load_txt.changeText(this.loadingTxt[e])
    }
    proload() {
      Laya.loader.create(this.loadResource, new Laya.Handler(this, this.onComplete))
    }
    onComplete() {
      this.loadFinishCount++;
      let e = this.loadFinishCount / this.loadResource.length;
      this.loadingBar.width = 205 * e, this.loadingBarTxt && (this.loadingBarTxt.value = "" + Math.floor(100 * e)), this.loadFinishCount >= this.loadResource.length && this.loadFinish()
    }
    loadFinish() {
      q.init(), q.openUI(n.UIVIEW.MAINVIEW), q.openUI(n.UIVIEW.SIGNINVIEW);
      let e = this;
      $.platform != J.OppoMinGame && $.platform != J.VivoMinGame || h.Reported(n.KEY.GAMESTATE, n.VALUE.DEFAULT), Laya.timer.once(1e3, this, () => {
        e.visible = !1, $.Jsb.reportMonitor()
      })
    }
  }
  class ie {
    constructor() { }
    static init() {
      var e = Laya.ClassUtils.regClass;
      e("runtime/ReviveView.ts", ee), e("runtime/GameView.ts", V), e("runtime/LoadView.ts", te), e("runtime/LoseView.ts", E), e("runtime/MainView.ts", S), e("runtime/MoneyView.ts", U), e("runtime/NativeView.ts", R), e("runtime/PushView.ts", X), e("runtime/ShareView.ts", Y), e("runtime/SigninView.ts", T), e("runtime/SkinView.ts", B), e("runtime/TipView.ts", N)
    }
  }
  ie.width = 640, ie.height = 1138, ie.scaleMode = "fixedwidth", ie.screenMode = "none", ie.alignV = "middle", ie.alignH = "center", ie.startScene = "LoadView.scene", ie.sceneRoot = "", ie.debug = !1, ie.stat = !1, ie.physicsDebug = !1, ie.exportSceneToJson = !0, ie.init();
  new class {
    constructor() {
      console.log(Laya.version)
      if (window.Laya3D ? Laya3D.init(ie.width, ie.height) : Laya.init(ie.width, ie.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(),
      Laya.SoundManager.useAudioMusic = false,
      Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = ie.scaleMode, Laya.stage.screenMode = ie.screenMode, Laya.stage.alignV = ie.alignV, Laya.stage.alignH = ie.alignH, Laya.URL.exportSceneToJson = ie.exportSceneToJson, (ie.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), ie.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), ie.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.MouseManager.multiTouchEnabled = !1, y.init(), window.tt) window.tt && (console.log("tt"), $.init(J.TTMinGame));
      else if (window.qq) console.log("qq"), $.init(J.QQMinGame);
      else if (window.swan) console.log("baidu"), $.init(J.BaiDuMinGame);
      else window.wx ? (console.log("weixin"), window.wx.loadSubpackage({
        name: "Conventional",
        success: function (e) {
          console.log("加载分包成功", e)
        },
        fail: function (e) {
          console.log("加载分包失败", e)
        }
      }).onProgressUpdate(e => {
        console.log("下载进度", e.progress), console.log("已经下载的数据长度", e.totalBytesWritten), console.log("预期需要下载的数据总长度", e.totalBytesExpectedToWrite)
      }), $.init(J.WXMinGame)) : window.uc ? (console.log("uc"), $.init(J.WXMinGame)) : (console.log("h5"), $.init(J.None));
      Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
    }
    onVersionLoaded() {
      console.log("==================");
      if (typeof minigame !== 'undefined') {
        //初始化 minigame sdk // @ts-ignore 
        minigame.initializeAsync().then(() => {
          console.log("====FB initializeAsync=====");
          // 记录启动来源 // @ts-ignore 
          minigame.getEntryPointAsync().then((entry) => {
            console.info("Entry Point: ", entry);
          });
          // 记录会话类型 // @ts-ignore 
          const contextType = minigame.context.getType(); console.info("Context Type: ", contextType); this.startMiniGameSDK();
        });
      } else {
        console.log("====本地=====");
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
      }

    }

    startMiniGameSDK() {
      // @ts-ignore 
      if (typeof minigame !== 'undefined') {
        //@ts-ignore 
        minigame.setLoadingProgress(100);
        //@ts-ignore 
        minigame.startGameAsync().then(() => {
          //加载 IDE 指定的场景，这里假定第一个场景名称是 startScene
          // GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
          Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }).catch((e) => {
          console.info("startGameAsync error: " + e);
        });
      }
    }

    onConfigLoaded() {
      var e = new te;
      Laya.stage.addChild(e), e.zOrder = 1100, $.platform == J.VivoMinGame ? Laya.timer.once(3e3, this, () => {
        $.Jsb.openAdvert(8)
      }) : ($.platform, J.OppoMinGame)
    }
  }
}();