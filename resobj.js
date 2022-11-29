const data = [
    {
      id: 1,
      name: "dono",
      address: "jakarta",
    },
    {
      id: 2,
      name: "kasino",
      address: "depok",
    },
  ];

  // ============= Cara 1
  for (const prop in data){
   // console.log(`${data[prop].address}`);
  }
 // ================ Cara 2
  const dataAddress = data.map(function(item){
    return item.address;
  })
 // console.log(dataAddress);

 // ================= Cara 3
  function getAddress(param){
  const result = param.map(function (item){
        return item.address;
    });
    return result;
  }
 // console.log(getAddress(data));

  // ================ Cara 4

  const ambilAdress = (par) =>{
    return par.map(function(item){
        return item.address
    });
  }

  //console.log(ambilAdress(data));
  
  const api = {
    res: "succedd",
    statusCode: 200,
    data: [
      {
        id: 1,
        name: "rinda",
      },
      {
        id: 2,
        name: "adinda",
      },
      {
        id: 3,
        name: "joko",
      },
    ],
  };

  function getApiName (param1){
    const get = param1.data.map(function(item){
        return item.name;
    })
    return get;
  }
  
  //console.log(getApiName(api));


  const data1 = [
    {
      id: 1,
      name: "ibnu",
      subject: {
        name: "english",
        score: 80,
      },
    },
    {
      id: 1,
      name: "dono",
      subject: {
        name: "english",
        score: 70,
      },
    },
    {
      id: 1,
      name: "dian",
      subject: {
        name: "english",
        score: 75,
      },
    },
  ];
  
  function getScore (param2){
    const scores = param2.filter(function(item){
        return item.subject.score > 70;
    })
    return scores.map(function (item){
        return item.subject.score;
    });
  }

  //console.log(getScore(data1));
  // di filter untuk mencari score > 70 lalu di map untuk mendapatkan nilai pada score bernilai angka



  // Catatan
  //1. apabila jenis data tersebut adalah array, untuk me-looping langsung di .map saja.
  //   jika jenis data adalah object, maka kamu harus masuk/menuju properti tersebut(name.addres) baru di .map untuk mengambil data pada array di prop address.
  //2. parameter pada function jika berada pada data array itu adalah index.
  //   contohnya jik ada jenis data array dan data di dalam array itu adalah object2, maka object2 tersebut adalah index dan itu disebut parameter jika masuk di function untuk me-looping pada .map

  //========== Looping Object ============

  const myInfo = {
    name: "robert",
    age: 25,
    hobbies: ["fishing", "riding"],
    family: {
      father: "jumadi",
      mother: "juminten",
      siblings: ["celine", "andrew"],
    },
   };
 // === akses obj menggunakan kurung tegak
 //console.log(myInfo["family"]["father"]);   
//console.log(myInfo["family"]["siblings"][1]);

//========================== for in looping for object==================
for ( const props in myInfo){
    console.log(props); //print properti pada  object
    console.log(myInfo[props]); // print properti beserta valuenya
    
}