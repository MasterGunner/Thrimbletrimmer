!function(t){t.fn.wThumbEditor=function(e){var i={framerate:30,tnWidth:640,tnHeight:360,tnAspectRatio:640/360},e=t.extend(i,e);return this.each(function(){function i(){var t=g[0],e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.rect(0,0,t.width,t.height),e.fillStyle="black",e.fill(),d.forEach(function(t){e.drawImage(t.img,t.xPos,t.yPos,t.width,t.height)})}function n(){var t=d.slice();t.forEach(function(t,e){t.img="wubPlayer"==t.img.id?"Video":t.img.src.substring(t.img.src.lastIndexOf("/")+1)}),window.opener.thumbnailInfo={thumbnailTime:v.val(),thumbnailProps:t.slice()}}function a(){if("undefined"!=typeof window.opener.thumbnailInfo.thumbnailProps){var e=JSON.parse(JSON.stringify(window.opener.thumbnailInfo.thumbnailProps.slice()));e.forEach(function(e,i){e.img="Video"==e.img?u:t('<img src="/thumbnailResources/'+e.img+'"></img>')[0]})}return e?e.slice():s.slice()}function l(){t(this).hasClass("active")?t(this).removeClass("active"):(w.children("li").removeClass("active"),t(this).addClass("active"),x.attr("tnVal",'{"width":"'+t(this).attr("elWidth")/t(this).attr("elHeight")+'","height":"1"}'),P.attr("tnVal",'{"width":"-'+t(this).attr("elWidth")/t(this).attr("elHeight")+'","height":"-1"}'))}function r(){w.empty(),E.empty(),t.getJSON("thumbnailResources/thumbnailresources.json",function(t){t.forEach(function(t){E.append('<option value="'+t.src+'" elWidth="'+t.width+'" elHeight="'+t.height+'">'+t.title+"</option>"),E.after('<img src="/thumbnailResources/'+t.src+'" style="display:none;"></img>')})}),y.click(function(){var e=t(":selected",E),n=parseInt(w.find(":last").attr("index"))+1;w.append('<li index="'+n+'" value="'+e.val()+'" elWidth="'+e.attr("elWidth")+'" elHeight="'+e.attr("elHeight")+'">'+e.text()+"</li>"),w.find(":last").click(l),d.push({img:t('<img src="/thumbnailResources/'+e.val()+'"></img>')[0],xPos:0,yPos:0,width:17,height:25}),setInterval(i(),150)}),B.click(function(){if(1===w.children("li.active").length){var e=w.children("li.active");d.splice(e.attr("index"),1),e.remove(),w.children().each(function(e,i){t(i).attr("index",e)}),i()}});var e=function(){d.length>0?(d.forEach(function(t,e){var i="wubPlayer"==t.img.id?"Video Frame":E.find('option[value="'+t.img.src.substring(t.img.src.lastIndexOf("/")+1)+'"]').text();w.append('<li index="'+e+'" elWidth="'+t.width+'" elHeight="'+t.height+'">'+i+"</li>")}),w.children("li").click(l)):setTimeout(e,150)};e()}var u=this,o=t(u).parent(),s=[{img:u,xPos:0,yPos:0,width:e.tnWidth,height:e.tnHeight}],d=[],c=t('<div class="wub-video-thumbnailSelector" ><input type="button" id="PrevFrameBtn" value="Previous Frame" /><input type="button" id="SelectFrameBtn" value="Select Thumbnail" /><input id="ThumbnailTime" /><input type="button" id="NextFrameBtn" value="Next Frame" /></div>'),h=t('<div id="ThumbnailEditorPane" style="clear:both; padding-top:5px;"><div><canvas style="float:left;" id="ThumbnailPreview" width="'+e.tnWidth+'" height="'+e.tnHeight+'"></canvas><ul style="float:left;" id="ElementList"></ul><select id="ElementOptions"></select><input type="button" id="ElementAdd" value="Add" /><input type="button" id="ElementRemove" value="Remove" /></div><div style="clear:both;"><input type="button" id="tnElLeftBtn" class="tnEditBtn" tnVal=\'{"xPos":"-10"}\' value="Left" /><input type="button" id="tnElRightBtn" class="tnEditBtn" tnVal=\'{"xPos":"10"}\' value="Right" /><input type="button" id="tnElUpBtn" class="tnEditBtn" tnVal=\'{"yPos":"-10"}\' value="Up" /><input type="button" id="tnElDownBtn" class="tnEditBtn" tnVal=\'{"yPos":"10"}\' value="Down" /><input type="button" id="tnElPlusBtn" class="tnEditBtn" tnVal=\'{"width":"1","height":"1"}\' value="+" /><input type="button" id="tnElMinusBtn" class="tnEditBtn" tnVal=\'{"width":"-1","height":"-1"}\' value="-" /></div><div style="clear:both;"><input type="button" id="ResetButton" value="Reset"/><input type="button" id="SubmitButton" value="Submit"/></div></div>');o.append(c),o.after(h);var c=t(".wub-video-thumbnailSelector",o),m=t("#PrevFrameBtn",c),p=t("#SelectFrameBtn",c),v=t("#ThumbnailTime",c),f=t("#NextFrameBtn",c),b=t("#ThumbnailEditorPane",o.parent()),g=t("#ThumbnailPreview",o.parent()),w=t("#ElementList",o.parent()),E=t("#ElementOptions",o.parent()),y=t("#ElementAdd",o.parent()),B=t("#ElementRemove",o.parent()),x=(t("#tnElLeftBtn",o.parent()),t("#tnElRightBtn",o.parent()),t("#tnElUpBtn",o.parent()),t("#tnElDownBtn",o.parent()),t("#tnElPlusBtn",o.parent())),P=t("#tnElMinusBtn",o.parent()),T=t("#ResetButton",b),R=t("#SubmitButton",b),F=function(){if(4===u.readyState){var t=window.opener.thumbnailInfo.thumbnailTime?window.opener.thumbnailInfo.thumbnailTime:(u.duration/2).toFixed(2);v.val(t),u.currentTime=t,setTimeout(function(){d=a(),i()},3e3),r()}else setTimeout(F,150)};F(),m.click(function(){u.currentTime-=1/e.framerate}),f.click(function(){u.currentTime+=1/e.framerate}),p.click(function(){v.val(u.currentTime.toFixed(2)),i()}),T.click(function(){v.val((u.duration/2).toFixed(2)),u.currentTime=(u.duration/2).toFixed(2),setTimeout(function(){d=s.slice(),r(),i()},500)}),R.click(function(){/^\d+\.?\d*$/.test(v.val())?(n(),window.close()):alert("Invalid timestamp. Make sure the time is entered in seconds.")});var S;b.find(".tnEditBtn").mousedown(function(){if(1===w.children("li.active").length){var e=w.children("li.active"),n=JSON.parse(t(this).attr("tnVal"));S=setInterval(function(){Object.keys(n).forEach(function(t){d[e.attr("index")][t]+=parseFloat(n[t])}),i()},100)}}).bind("mouseup mouseleave",function(){clearInterval(S)})})}}(jQuery);