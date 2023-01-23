    function preventBehavior(ffe) {
     ffe.preventDefault(); 
     var touch = ffe.touches[0];
     clientX = touch.clientX;
     clientY = touch.clientY;
    };
    function ele(apa) { 
     mouseDown += 1;
     var touch = apa.touches[0];
     clientX = touch.clientX;
     clientY = touch.clientY;
     var touchDownCoordinateSensor = apa.touches[mouseDown - 1];
     if (rectRadius**2 < (touchDownCoordinateSensor.clientX - rectX)**2 + (touchDownCoordinateSensor.clientY - rectY)**2 && attackCooldown <= attackCooldownTimer){
      attack = 1;
      attackDuration = 0;
      attackCooldownTimer = 0;
     }
    };
    function lel(){
     mouseDown -= 1;
    };
    document.addEventListener("touchmove", preventBehavior, {passive: false});
    document.getElementById("canvas").addEventListener("touchstart",ele);
    document.getElementById("canvas").addEventListener("touchend",lel);
    var canvas = document.getElementById('canvas');
    var playerSpeed = 3;
    var playerMovementX = 0;
    var playerMovementY = 0;
    var clientX = 1050;
    var clientY = 700;
    var rectX = 1000;
    var rectY = 700;
    var playerX = 0;
    var playerY = 0;
    var playerAttack = 10;
    var playerHealth = 100;
    var maxPlayerHealth = 100;
    var usernames = [];
    var passwords = [];
    //var username = prompt("Username?");
    //var password = prompt("Password?");
    //things i need for cloud: maxPlayerHealth, playerHealth, playerAttack, attack, playerX, playerY, playerSpeed, degree, username, password, online, usernames, passwords
    var testMobStats = [10000000000000000000,10000000000000000000000000,1000000000000000000000,0,1,4,0];
    var testMob = [200,100,75,75,0,0,"29039f",1,0,testMobStats];
    var testMob2 = [300,100,10,205,0,0,"a2b1c3",-1,0];
    var testMob8 = [100,100,10,205,0,0,"a2b1c3",0,0];
    var testMob9 = [200,0,205,10,0,0,"a2b1c3",0,0];
    var testMob10 = [200,200,205,10,0,0,"a2b1c3",0,0];
    var testMob3 = [50,300,15,260,2,1,"12f1fe",0,0];
    var testMob4 = [150,170,215,15,2,1,"12f1fe",0,0];
    var testMob5 = [250,300,15,260,2,1,"12f1fe",0,0];
    var testMob6 = [150,430,215,15,2,1,"12f1fe",0,0];
    var testMob7 = [150,300,205,255,2,1,"4ccb39",0,0];
    var spawnWall1 = [500,0,10,1010,0,0,"fb2399",0,0];
    var spawnWall2 = [-500,0,10,1010,0,0,"fb2399",0,0];
    var spawnWall3 = [0,500,1010,10,0,0,"fb2399",0,0];
    var spawnWall4 = [0,-500,1010,10,0,0,"fb2399",0,0];
    var spawnResetPartStats = [100,100,20,0,100,9,0];
    var spawnResetPart = [-100,-100,75,75,0,0,"ff0000",1,0.5,spawnResetPartStats];
    var spawnResetPartStats2 = [100,100,10,0,100,10,0];
    var spawnResetPart2 = [100,100,50,50,0,0,"ff0000",1,1,spawnResetPartStats2];
    var spawnResetPartStats3 = [100,100,5,0,100,11,0];
    var spawnResetPart3 = [100,100,25,25,0,0,"ff0000",1,2,spawnResetPartStats3];
    var spawnResetPartStats4 = [100,100,1,0,10,12,0];
    var spawnResetPart4 = [100,100,50,50,0,0,"00ff00",1,1,spawnResetPartStats4];
    //var mobs = [spawnWall1,spawnWall2,spawnWall3,spawnWall4,testMob7,testMob,testMob2,testMob8,testMob9,testMob10,testMob3,testMob4,testMob5,testMob6];
    var monsterStats = [spawnResetPartStats,spawnResetPartStats2,spawnResetPartStats3,spawnResetPartStats4,testMobStats];
    var mobs = [spawnWall1,spawnWall2,spawnWall3,spawnWall4,testMob,testMob2,testMob8,testMob9,testMob10,spawnResetPart,spawnResetPart2,spawnResetPart3,spawnResetPart4];
    var testRectColliderX = [];
    var testRectColliderY = [];
    var testRectResetPartX = [];
    var testRectResetPartY = [];
    var testRectResetPartID = [];
    var testRectX = 200;
    var testXDirection = 0;
    var testRectY = 100;
    var testRectWidth = 100;
    var testRectHeight = 100;
    var rectRadius = 100;
    var mouseDown = 0;
    var collisiona = 0;
    var attack = 0;
    var attackDuration = 0;
    var attackCooldown = 400;
    var attackCooldownTimer = 0;
    const context = canvas.getContext('2d');
    setInterval(() => {
     for (var mover = 0; mover < mobs.length; mover++){
      mobs[mover][0] += mobs[mover][4];
      mobs[mover][1] += mobs[mover][5];
      if (mobs[mover][8] != 0){
       mobs[mover][4] = -((mobs[mover][8] / (Math.sqrt((mobs[mover][0] - playerX)**2 + (mobs[mover][1] - playerY)**2))) * (mobs[mover][0] - playerX));
       mobs[mover][5] = -((mobs[mover][8] / (Math.sqrt((mobs[mover][0] - playerX)**2 + (mobs[mover][1] - playerY)**2))) * (mobs[mover][1] - playerY));
      }
     }
     context.clearRect(0, 0, canvas.width, canvas.height);
     var collidere = 0;
     var colliderMaker3 = 0;
     var resetPartMaker3 = 0;
     for (var collidere = 0; collidere < mobs.length; collidere++){
      if (mobs[collidere][7] == 0){
       for (var colliderMaker = 0; colliderMaker < mobs[collidere][2]; colliderMaker++){
        testRectColliderX[colliderMaker3] = mobs[collidere][0] + colliderMaker - (mobs[collidere][2]/2);
        colliderMaker++;
        colliderMaker3++;
        testRectColliderX[colliderMaker3] = mobs[collidere][0] + colliderMaker - 1 - (mobs[collidere][2]/2);
        colliderMaker--;
        colliderMaker3--;
        testRectColliderY[colliderMaker3] = mobs[collidere][1] - (mobs[collidere][3]/2);
        colliderMaker++;
        colliderMaker3++;
        testRectColliderY[colliderMaker3] = mobs[collidere][1] + (mobs[collidere][3]/2);
        colliderMaker3++;
       }
       var colliderMaker4 = 0;
       for (var colliderMaker2 = mobs[collidere][2]; colliderMaker2 < (mobs[collidere][3]) + (mobs[collidere][2]); colliderMaker2++){
        testRectColliderY[colliderMaker3] = mobs[collidere][1] + colliderMaker4 - (mobs[collidere][3]/2);
        colliderMaker2++;
        colliderMaker3++;
        colliderMaker4++;
        testRectColliderY[colliderMaker3] = mobs[collidere][1] + colliderMaker4 - 1 - (mobs[collidere][3]/2);
        colliderMaker2--;
        colliderMaker3--;
        testRectColliderX[colliderMaker3] = mobs[collidere][0] - (mobs[collidere][2]/2);
        colliderMaker2++;
        colliderMaker3++;
        colliderMaker4++;
        testRectColliderX[colliderMaker3] = mobs[collidere][0] + (mobs[collidere][2]/2);
        colliderMaker3++;
       }
      } else if (mobs[collidere][7] == 1) {
       for (var resetPartMaker = 0; resetPartMaker < mobs[collidere][2]; resetPartMaker++){
        testRectResetPartX[resetPartMaker3] = mobs[collidere][0] + resetPartMaker - (mobs[collidere][2]/2);
        testRectResetPartID[resetPartMaker3] = mobs[collidere][9][5];
        resetPartMaker++;
        resetPartMaker3++;
        testRectResetPartX[resetPartMaker3] = mobs[collidere][0] + resetPartMaker - 1 - (mobs[collidere][2]/2);
        testRectResetPartID[resetPartMaker3] = mobs[collidere][9][5];
        resetPartMaker--;
        resetPartMaker3--;
        testRectResetPartY[resetPartMaker3] = mobs[collidere][1] - (mobs[collidere][3]/2);
        resetPartMaker++;
        resetPartMaker3++;
        testRectResetPartY[resetPartMaker3] = mobs[collidere][1] + (mobs[collidere][3]/2);
        resetPartMaker3++;
       }
       var resetPartMaker4 = 0;
       for (var resetPartMaker2 = mobs[collidere][2]; resetPartMaker2 < (mobs[collidere][3]) + (mobs[collidere][2]); resetPartMaker2++){
        testRectResetPartY[resetPartMaker3] = mobs[collidere][1] + resetPartMaker4 - (mobs[collidere][3]/2);
        testRectResetPartID[resetPartMaker3] = mobs[collidere][9][5];
        resetPartMaker2++;
        resetPartMaker3++;
        resetPartMaker4++;
        testRectResetPartY[resetPartMaker3] = mobs[collidere][1] + resetPartMaker4 - 1 - (mobs[collidere][3]/2);
        testRectResetPartID[resetPartMaker3] = mobs[collidere][9][5];
        resetPartMaker2--;
        resetPartMaker3--;
        testRectResetPartX[resetPartMaker3] = mobs[collidere][0] - (mobs[collidere][2]/2);
        resetPartMaker2++;
        resetPartMaker3++;
        resetPartMaker4++;
        testRectResetPartX[resetPartMaker3] = mobs[collidere][0] + (mobs[collidere][2]/2);
        resetPartMaker3++;
       }
      }
     }
     /*
     var testRectColliderX = [testRectX - (testRectWidth/2),testRectX - (testRectWidth/2),testRectX - (testRectWidth/2),testRectX,testRectX + (testRectWidth/2),testRectX + (testRectWidth/2),testRectX + (testRectWidth/2),testRectX];
     var testRectColliderY = [testRectY - (testRectWidth/2),testRectY,testRectY + (testRectWidth/2),testRectY + (testRectWidth/2),testRectY + (testRectWidth/2),testRectY,testRectY - (testRectWidth/2),testRectY - (testRectWidth/2)];
     */
     context.fillStyle = "#12f1fe";
     context.beginPath();
     context.ellipse(1000,700,100,100,0,0,360,false);
     context.fill();
     context.closePath();
     /*
     context.fillText(mouseDown,100,100);
     context.fillText(playerMovementX,100,200);
     context.fillText(playerMovementY,100,300);
     context.fillText(clientX,100,400);
     context.fillText(clientY,100,500);
     context.fillText(Math.sqrt(playerMovementX**2 + playerMovementY**2),100,600);
     */
     context.fillText(attackCooldownTimer,100,200);
     context.fillText(mouseDown,100,300);
     context.fillText(mobs[0][1],100,400);
     if (playerMovementY <= 0){
      var degree = ((Math.atan(playerMovementX/playerMovementY)/Math.atan(1/0))*90)+180;
      context.fillText(((Math.atan(playerMovementX/playerMovementY)/Math.atan(1/0))*90)+180,100,400);
     } else if (playerMovementX <= 0){
      var degree = ((Math.atan(playerMovementX/playerMovementY)/Math.atan(1/0))*90)+360;
      context.fillText(((Math.atan(playerMovementX/playerMovementY)/Math.atan(1/0))*90)+360,100,400);
     } else {
      var degree = ((Math.atan(playerMovementX/playerMovementY)/Math.atan(1/0))*90);
      context.fillText(((Math.atan(playerMovementX/playerMovementY)/Math.atan(1/0))*90),100,400);
     }
     context.fillStyle = "white";
     attackCooldownTimer += 1;
     if (attack == 1){
      attackDuration += 1;
      context.beginPath();
      context.moveTo((canvas.width/2)+(playerMovementX*16),(canvas.height/2)+(playerMovementY*16));
      context.lineTo((canvas.width/2)+(playerMovementX*13)+(playerMovementY*15),(canvas.height/2)+(playerMovementY*13)-(playerMovementX*15));
      context.lineTo((canvas.width/2)+(playerMovementX*13)-(playerMovementY*15),(canvas.height/2)+(playerMovementY*13)+(playerMovementX*15));
      context.fill();
      context.closePath();
      context.fillText("attack",100,100);
      if (attackDuration == 100){
       attack = 0;
      }
     }
     context.fillStyle = "#12f1fe";
     for (var renderer = 0; renderer < mobs.length; renderer++){
      context.beginPath();
      context.fillStyle = mobs[renderer][6];
      context.rect(mobs[renderer][0] + (canvas.width/2) - playerX - (mobs[renderer][2]/2),mobs[renderer][1] + (canvas.height/2) - playerY - (mobs[renderer][3]/2), mobs[renderer][2],mobs[renderer][3]);
      context.fill();
      context.closePath();
     }
     context.fillStyle = "#4ccb39";
     context.beginPath();
     context.ellipse((canvas.width/2),(canvas.height/2),30,30,0,0,360,false);
     context.fill();
     context.closePath();
     context.fillStyle = "#000000"
     context.beginPath();
     context.ellipse(((24 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientX - rectX)) + (canvas.width/2) + ((10 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientY - rectY)),((24 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientY - rectY)) + (canvas.height/2) - ((10 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientX - rectX)),4,4,0,0,360,false);
     context.fill();
     context.closePath();
     context.beginPath();
     context.ellipse(((24 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientX - rectX)) + (canvas.width/2) - ((10 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientY - rectY)),((24 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientY - rectY)) + (canvas.height/2) + ((10 / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientX - rectX)),4,4,0,0,360,false);
     context.fill();
     context.closePath();
     context.fillStyle = "964B00";
     context.beginPath();
     context.rect((canvas.width/2)-30,(canvas.height/2)-45,60,10);
     context.fill();
     context.closePath();
     context.fillStyle = "00ff00";
     context.beginPath();
     context.rect((canvas.width/2)-30,(canvas.height/2)-45,(60*playerHealth)/maxPlayerHealth,10);
     context.fill();
     context.closePath();
     if (rectRadius**2 >= (clientX - rectX)**2 + (clientY - rectY)**2 && mouseDown >= 1){
      context.beginPath();
      context.ellipse(clientX,clientY,20,20,0,0,360,false);
      context.fillStyle = '91af0e';
      context.fill();
      context.closePath();
      for (var collisionCounter = 0; collisionCounter < testRectColliderX.length; collisionCounter++){
       if ((testRectColliderX[collisionCounter] - playerX - playerMovementX)**2 + (testRectColliderY[collisionCounter] - playerY - playerMovementY)**2 <= 900){
        collisiona = 1;
       }
       if ((testRectColliderX[collisionCounter] - playerX - playerMovementX)**2 + (testRectColliderY[collisionCounter] - playerY)**2 <= 900){
        var collisiona2 = 1;
       }
       if ((testRectColliderX[collisionCounter] - playerX)**2 + (testRectColliderY[collisionCounter] - playerY - playerMovementY)**2 <= 900){
        var collisiona3 = 1;
       }
       /*
       context.fillText(".",testRectColliderX[collisionCounter]+(canvas.width/2)-playerX,testRectColliderY[collisionCounter]+(canvas.height/2)-playerY);
       */
      }
      if (collisiona == 0){
       playerX += playerMovementX;
       playerY += playerMovementY;
       var collisiona4 = 1;
      } else {
       collisiona = 0;
      }
      if (collisiona2 == 0 && collisiona4 == 0){
       playerX += playerMovementX;
      } else {
       collisiona2 = 0;
       collisiona4 = 0;
      }
      if (collisiona3 == 0 && collisiona4 == 0){
       playerY += playerMovementY;
      } else {
       collisiona3 = 0;
       collisiona4 = 0;
      }
      playerMovementX = (playerSpeed / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientX - rectX);
      playerMovementY = (playerSpeed / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientY - rectY);
     } else {
      playerMovementX = 0;
      playerMovementY = 0;
     }
     for (var collisionCounter = 0; collisionCounter < testRectColliderX.length; collisionCounter++){
      if ((testRectResetPartX[collisionCounter] - playerX - playerMovementX)**2 + (testRectResetPartY[collisionCounter] - playerY - playerMovementY)**2 <= 900){
       if (mobs[testRectResetPartID[collisionCounter]][9][3] > mobs[testRectResetPartID[collisionCounter]][9][4]){
        playerHealth -= mobs[testRectResetPartID[collisionCounter]][9][2];
        mobs[testRectResetPartID[collisionCounter]][9][3] = 0;
       }
      }
     }
     for (var monsterCooldownCounter = 0; monsterCooldownCounter < monsterStats.length; monsterCooldownCounter++){
      monsterStats[monsterCooldownCounter][3] += 1;
     }
     if (playerHealth < 1){
      playerX = 0;
      playerY = 0;
      playerHealth = maxPlayerHealth;
     }
     playerMovementX = (playerSpeed / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientX - rectX);
      playerMovementY = (playerSpeed / (Math.sqrt((clientX - rectX)**2 + (clientY - rectY)**2))) * (clientY - rectY);
    }, 1);
    context.fillStyle = "red";
    context.font = "bold 16px Arial";
