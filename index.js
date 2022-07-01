function updateModifiers() {
    //converte valor de habilidade para modificadores.
    var strScore = document.getElementById("strScore").value;
    document.getElementById("strMod").value = Math.floor((strScore - 10) / 2);
    var dexScore = document.getElementById("dexScore").value;
    document.getElementById("dexMod").value = Math.floor((dexScore - 10) / 2);
    var conScore = document.getElementById("conScore").value;
    document.getElementById("conMod").value = Math.floor((conScore - 10) / 2);
    var intScore = document.getElementById("intScore").value;
    document.getElementById("intMod").value = Math.floor((intScore - 10) / 2);
    var wisScore = document.getElementById("wisScore").value;
    document.getElementById("wisMod").value = Math.floor((wisScore - 10) / 2);
    var chaScore = document.getElementById("chaScore").value;
    document.getElementById("chaMod").value = Math.floor((chaScore - 10) / 2);

    setSkills();
    enableArmor();
    equipArmor(equippedArmor);
    shieldEquip(shieldEquip);
  }
  
  function updateProfBonus() {
    //atualiza os valores de proeficiência baseado no nivel do jogador.
  
    var playerLevel = parseInt(document.getElementById("playerLevel").value);
    if (playerLevel >= 17) {
      document.getElementById("profBonus").value = 6;
    } else if (playerLevel >= 13) {
      document.getElementById("profBonus").value = 5;
    } else if (playerLevel >= 9) {
      document.getElementById("profBonus").value = 4;
    } else if (playerLevel >= 5) {
      document.getElementById("profBonus").value = 3;
    } else {
      document.getElementById("profBonus").value = 2;
    }
  }
  
  function setSkills() {
    var profBonus = parseInt(document.getElementById("profBonus").value);
    var strMod = parseInt(document.getElementById("strMod").value);
    var dexMod = parseInt(document.getElementById("dexMod").value);
    var conMod = parseInt(document.getElementById("conMod").value);
    var intMod = parseInt(document.getElementById("intMod").value);
    var wisMod = parseInt(document.getElementById("wisMod").value);
    var chaMod = parseInt(document.getElementById("chaMod").value);
  
    if (document.getElementById("acrProf").checked == true) {
      document.getElementById("acrScore").value = dexMod + profBonus;
    } else {
      document.getElementById("acrScore").value = dexMod;
    }
    if (document.getElementById("arcProf").checked == true) {
      document.getElementById("arcScore").value = intMod + profBonus;
    } else {
      document.getElementById("arcScore").value = intMod;
    }
    if (document.getElementById("atlProf").checked == true) {
      document.getElementById("atlScore").value = strMod + profBonus;
    } else {
      document.getElementById("atlScore").value = strMod;
    }
    if (document.getElementById("atuProf").checked == true) {
      document.getElementById("atuScore").value = chaMod + profBonus;
    } else {
      document.getElementById("atuScore").value = chaMod;
    }
    if (document.getElementById("engProf").checked == true) {
      document.getElementById("engScore").value = chaMod + profBonus;
    } else {
      document.getElementById("engScore").value = chaMod;
    }
    if (document.getElementById("furProf").checked == true) {
      document.getElementById("furScore").value = dexMod + profBonus;
    } else {
      document.getElementById("furScore").value = dexMod;
    }
    if (document.getElementById("hisProf").checked == true) {
      document.getElementById("hisScore").value = intMod + profBonus;
    } else {
      document.getElementById("hisScore").value = intMod;
    }
    if (document.getElementById("intiProf").checked == true) {
      document.getElementById("intiScore").value = chaMod + profBonus;
    } else {
      document.getElementById("intiScore").value = chaMod;
    }
    if (document.getElementById("intuProf").checked == true) {
      document.getElementById("intuScore").value = wisMod + profBonus;
    } else {
      document.getElementById("intuScore").value = wisMod;
    }
    if (document.getElementById("inveProf").checked == true) {
      document.getElementById("inveScore").value = intMod + profBonus;
    } else {
      document.getElementById("inveScore").value = intMod;
    }
    if (document.getElementById("lidProf").checked == true) {
      document.getElementById("lidScore").value = wisMod + profBonus;
    } else {
      document.getElementById("lidScore").value = wisMod;
    }
    if (document.getElementById("medProf").checked == true) {
      document.getElementById("medScore").value = wisMod + profBonus;
    } else {
      document.getElementById("medScore").value = wisMod;
    }
    if (document.getElementById("natProf").checked == true) {
      document.getElementById("natScore").value = intMod + profBonus;
    } else {
      document.getElementById("natScore").value = intMod;
    }
    if (document.getElementById("percProf").checked == true) {
      document.getElementById("percScore").value = wisMod + profBonus;
    } else {
      document.getElementById("percScore").value = wisMod;
    }
    if (document.getElementById("persProf").checked == true) {
      document.getElementById("persScore").value = chaMod + profBonus;
    } else {
      document.getElementById("persScore").value = chaMod;
    }
    if (document.getElementById("presProf").checked == true) {
      document.getElementById("presScore").value = dexMod + profBonus;
    } else {
      document.getElementById("presScore").value = dexMod;
    }
    if (document.getElementById("relProf").checked == true) {
      document.getElementById("relScore").value = intMod + profBonus;
    } else {
      document.getElementById("relScore").value = intMod;
    }
    if (document.getElementById("sobProf").checked == true) {
      document.getElementById("sobScore").value = wisMod + profBonus;
    } else {
      document.getElementById("sobScore").value = wisMod;
    }
  }
  
  function equipArmor(equippedArmor) {
    var armor = equippedArmor.value;
    if (armor == "acolchoada") {
      document.getElementById("armorClass").value =
        parseInt(document.getElementById("dexMod").value) + 11;
    } else if (armor == "couro") {
      document.getElementById("armorClass").value =
        parseInt(document.getElementById("dexMod").value) + 11;
    } else if (armor == "couroBatido") {
      document.getElementById("armorClass").value =
        parseInt(document.getElementById("dexMod").value) + 12;
    } else if (armor == "gibao") {
      var tempArmor = parseInt(document.getElementById("dexMod").value) + 12;
      if (tempArmor > 14) {
        document.getElementById("armorClass").value = 14;
      } else {
        document.getElementById("armorClass").value = tempArmor;
      }
    } else if (armor == "cotaMalhaParcial") {
      var tempArmor1 = parseInt(document.getElementById("dexMod").value) + 13;
      if (tempArmor1 > 15) {
        document.getElementById("armorClass").value = 15;
      } else {
        document.getElementById("armorClass").value = tempArmor1;
      }
    } else if (armor == "lorica") {
      var tempArmor2 = parseInt(document.getElementById("dexMod").value) + 14;
      if (tempArmor2 > 16) {
        document.getElementById("armorClass").value = 16;
      } else {
        document.getElementById("armorClass").value = tempArmor2;
      } 
    } else if (armor == "couraca") {
        var tempArmor3 = parseInt(document.getElementById("dexMod").value) + 14;
        if (tempArmor3 > 16) {
        document.getElementById("armorClass").value = 16;
        } else {
        document.getElementById("armorClass").value = tempArmor3;
    }
    } else if (armor == "placasParcial") {
    var tempArmor4 = parseInt(document.getElementById("dexMod").value) + 15;
    if (tempArmor4 > 17) {
    document.getElementById("armorClass").value = 17;
    } else {
    document.getElementById("armorClass").value = tempArmor4;
    }
    } else if (armor == "cotaAneis") {
    document.getElementById("armorClass").value = 14;
    }
     else if (armor == "cotaMalha") {
    document.getElementById("armorClass").value = 16;
    }
     else if (armor == "cotaTalas") {
    document.getElementById("armorClass").value = 17;
    }
    else if (armor == "placas") {
      document.getElementById("armorClass").value = 18;
      } else {
        document.getElementById("armorClass").value = parseInt(document.getElementById("dexMod").value) + 10;
      }
    }
  function shieldEquip(shieldEquip) {
    var shield = shieldEquip.value;
    if (shield == 'shield') {
      document.getElementById("armorClass").value = parseInt(document.getElementById("armorClass").value) + 2;
    } else {
      equipArmor(equippedArmor);
    }
  }

  function enableArmor() {
    var strScore = document.getElementById("strScore").value;
    if (strScore > 14) {
      document.getElementById("cota").disabled = false;
      document.getElementById("talas").disabled = false;
      document.getElementById("placas").disabled = false;
    } else if (strScore > 12) {
      document.getElementById("cota").disabled = false;
      document.getElementById("talas").disabled = true;
      document.getElementById("placas").disabled = true;
    } else {
      document.getElementById("cota").disabled = true;
      document.getElementById("talas").disabled = true;
      document.getElementById("placas").disabled = true;
    }
  }

  function playerLevelChange() {
    updateProfBonus()
    updateModifiers()
    setSkills()
    equipArmor()
    shieldEquip()
  }