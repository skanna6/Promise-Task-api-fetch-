async function rest() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      const rest = document.getElementById("restc");
      data.forEach((datas) => {
        let rc = document.createElement('div');
        let rcatt = document.createAttribute("class");
        rcatt.value='rcatt';
        rc.setAttributeNode(rcatt);
        let hname = document.createElement("h3");
        let flagimg = document.createElement("img");
        let cap = document.createElement("p");
        let ccodes = document.createElement("p");
        let reg = document.createElement("p");
        let ll = document.createElement("p");

        rest.append(rc);

        hname.innerHTML = datas.name.official;
        rc.append(hname);
        flagimg.src = datas.flags.png;
        rc.append(flagimg);
        cap.innerHTML = " <b> Captial : </b> " + datas.capital;
        rc.append(cap);
        ccodes.innerHTML = "Country Codes : " + datas.cca2 + "," + datas.cca3;
        rc.append(ccodes);
        reg.innerHTML = "Region : " +"<b>" + datas.region +"</b>"
        rc.append(reg);
        ll.innerHTML = "Lat,Long : " + "<b>" + datas.latlng[0] + ", " + datas.latlng[1] +"</b>";
        rc.append(ll);

      });

    } catch (err) {
      console.log(err);
    }
  }

  rest();