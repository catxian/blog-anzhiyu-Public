if(PublicSacrificeDay()){
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }
  
  // 通用函数：显示提示消息
  function showMessage(message, duration = 2000) {
      // 创建提示消息元素
      const replySelectMessage = document.createElement('div');
      replySelectMessage.innerHTML = message;
      replySelectMessage.classList.add('pop-message'); // 添加 CSS 类
      document.body.appendChild(replySelectMessage);
  
      // 设置初始透明度为0
      replySelectMessage.style.opacity = '0';
  
      // 使用 setTimeout 设置动画显示提示消息
      setTimeout(() => {
          replySelectMessage.style.opacity = '1';
      }, 10);
  
      // 定义移除提示消息的函数
      function removeMessage() {
          // 将透明度设置为0，使其隐藏
          replySelectMessage.style.opacity = '0';
          
          // 等待隐藏动画完成后移除元素
          setTimeout(() => {
              document.body.removeChild(replySelectMessage);
          }, 500); // 动画持续时间
      }
  
      // 根据指定的持续时间设置定时器来移除提示消息
      setTimeout(removeMessage, duration);
  }
  
  function PublicSacrificeDay() {
      var PSFarr = new Array("0403", "0404", "0405", "0406", "0414", "0512", "0707", "0807", "0814", "0909", "0918", "0930", "1025", "1213");
      var messages = {
          "0403": "清明节，缅怀先人。",
          "0404": "清明节，缅怀先人。",
          "0405": "清明节，缅怀先人。",
          "0406": "清明节，缅怀先人。",
          "0414": "青海玉树地震纪念日。",
          "0512": "四川汶川地震纪念日。",
          "0707": "七七事变纪念日。",
          "0807": "甘肃舟曲特大泥石流纪念日。",
          "0814": "世界慰安妇纪念日。",
          "0909": "毛主席逝世纪念日。",
          "0918": "九一八事变纪念日。",
          "0930": "烈士纪念日。",
          "1025": "抗美援朝纪念日。",
          "1213": "南京大屠杀纪念日。"
      };
      
      var currentdate = new Date();
      var str = "";
      var mm = currentdate.getMonth() + 1;
      if (currentdate.getMonth() > 9) {
          str += mm;
      } else {
          str += "0" + mm;
      }
      if (currentdate.getDate() > 9) {
          str += currentdate.getDate();
      } else {
          str += "0" + currentdate.getDate();
      }
      
      if (PSFarr.indexOf(str) > -1) {
          var message = messages[str] || "全站变灰一天，以示哀悼";
          document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
          showMessage(message, 4000);
          return 1;
      } else {
          return 0;
      }
  }