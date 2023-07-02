const posts = [
  {
    id: 1,
    image:
      "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/347396195_2151014938428712_2628063227747728775_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGH-sMok9GDcptIXK76M3Cxr6zsZ3RuS_GvrOxndG5L8TKp3SO-vHvbukvrglwwWXpzpVpjpg1F3IUgWt6a1-1C&_nc_ohc=X5JC9h5iScwAX8YV53W&_nc_ht=scontent.fdac149-1.fna&oh=00_AfA5xl1E7UX-QceTav6sBLpouYXaS_72r8TwNq9EcV7jQA&oe=64A67038",
    content: `Never ask of   money   spent,  
    where the spender thinks it went. `,
    like: 300,
    comment: 95,
    timeAgo: "20 min",
    author: {
      name: "Muzahid Hossain",
      photo:
        "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/300625297_1923488927847982_8776333884817876291_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeElS-BbkZI1BAFCtH_JkT1AenabBkS8o0d6dpsGRLyjR2W2NMTKTAtFE3Wz-d8RBTnTr8PAxf7G8jfz8tZ8Y6nv&_nc_ohc=STZPWtiVzIAAX-bCOYB&_nc_ht=scontent.fdac149-1.fna&oh=00_AfA-ufJHBb5FVX5KZfQMsqEqj_2rKfFqQlGYCYzHzyVi0g&oe=64A60A98",
    },
  },
  {
    id: 2,
    image:
      "https://scontent.fdac33-1.fna.fbcdn.net/v/t39.30808-6/357825052_6770933566251038_4536572395675463053_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG7Tm5_ggmA6GiiysGLr1Nc5TB6ZK3b-EjlMHpkrdv4SOWBIArmX1XQ95w4ojO3wCBRUllFFz-d1wl0l0I_2hR6&_nc_ohc=GpBPzNp-ObUAX9Y_lPW&_nc_ht=scontent.fdac33-1.fna&oh=00_AfCvgxDXsltfrDrCav4ahW2N_d3jXaeiKQTNRAWgve_Bvg&oe=64A7160A",
    content: `ঈদের পর প্রথম কর্মদিবস,,,!`,
    like: 500,
    comment: 120,
    timeAgo: "30 min",
    author: {
      name: "রাহমান হাফিজ",
      photo:
        "https://scontent.fdac33-1.fna.fbcdn.net/v/t39.30808-6/343404898_678219307397984_6517445565714684619_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHX569HgCK2hTC0C6A8R2b61sozsECkHpHWyjOwQKQekYlv9W9cbJNBdYbmq04rM2fFita0XgqGnDxcMzNuPvts&_nc_ohc=DgUeGMYsaeUAX_5py5m&_nc_ht=scontent.fdac33-1.fna&oh=00_AfCup8ev4949HASq9QurcitWmBqgNU_jzHtarTOTr4Sfjg&oe=64A69D3A",
    },
  },
  {
    id: 3,
    image:
      "https://scontent.fdac33-1.fna.fbcdn.net/v/t39.30808-6/355149494_10218989009835661_8728372158730215925_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH--qGEdftnz6htWHK8fa5vGXmS7bQ1m60ZeZLttDWbrXlvuF7wI-dacnBjAWqsCfukO2FZgnvwGJj4PR8-Scmi&_nc_ohc=b3IyPSb7bWMAX-JZmQg&_nc_ht=scontent.fdac33-1.fna&oh=00_AfCthkobxayZtBxEut1IQS5hqgHiM7PX8zATBah2NajeQw&oe=64A6D9EC",
    content: `captionless`,
    like: 95,
    comment: 21,
    timeAgo: "5 min",
    author: {
      name: "Md Hasibur Rahman (Arsan)",
      photo:
        "https://scontent.fdac33-1.fna.fbcdn.net/v/t39.30808-6/351004230_1325299034725270_1093493319588247553_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGkahok9HH1CABFyfUJncmXsXOATr4-1Fexc4BOvj7UWDjqvC2na_5lcRiGazKrYdNXaFfZyUeOtoRAylrazdQ&_nc_ohc=maD5km64o3MAX-MLCtn&_nc_ht=scontent.fdac33-1.fna&oh=00_AfBom8xKer1c2y-L4ywYPVaSLxrSHWHfO-HWLvKBZbcXtA&oe=64A61E1B",
    },
  },
  {
    id: 4,
    image:
      "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/347411335_6988669344495919_3576780067330628602_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFzd7mbDHE9YEPpnqMSdy6YKsQDueJtABkqxAO54m0AGWIQhcTAdDwrPFs5EHxeX-IRamuXqY40NuEYUkfePGIR&_nc_ohc=DVPOtgqLxGQAX-uwmoI&_nc_ht=scontent.fdac149-1.fna&oh=00_AfBV9LeXM-uc8BqVkM25a9QsxG4FwZtQpA9gSi1XEFJ1lw&oe=64A73299",
    content: `ঈদ পরবর্তী প্রথম অফিস।`,
    like: 30,
    comment: 5,
    timeAgo: "25 min",
    author: {
      name: "Suman Partha",
      photo:
        "https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/119675357_957998234683333_6840447140703312947_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGUFLmmVGyqhS1jMoxAE7myyqeSrDJAq4XKp5KsMkCrhScAjETuV6pcx7zVGrA8WNsrHcXgOFm9gn7b01QB19-8&_nc_ohc=JT3JkVUbzxEAX-x9cy9&_nc_ht=scontent.fdac149-1.fna&oh=00_AfAxK-fCqUJ4c9brjnNp5e9PANq6WTHqg37TPYe5t0ia_w&oe=64C9098E",
    },
  },
  {
    id: 5,
    image:
      "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/357680216_10227607799873256_5352826750819701006_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHcaCkXJRsVl5SRvjiFIsB_fhKIccIkYmV-EohxwiRiZTVkKpRxiag6WJMNxFhvS9IyHtmSstS-4j-yt2YG4sVG&_nc_ohc=eDNAMU0uwysAX8D6i_c&_nc_ht=scontent.fdac149-1.fna&oh=00_AfBSp6hzozrDOx3ciRaA_CacIYUsqMGhpaZ6-bNoaABaAQ&oe=64A58F83",
    content: `Happiness is - when kids pick fruit from their own tree !`,
    like: 46,
    comment: 7,
    timeAgo: "51 min",
    author: {
      name: "Sarwar Hossain",
      photo:
        "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-1/342173575_146790941660819_6544770982422960502_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFfI8xw90iiS8N2q9Igmw0kcsMr5PBoBwJywyvk8GgHAinQfrjW490u2ci5w_9hitdA2Tr7xBC-TT0pJzoKgHpG&_nc_ohc=yLZP1i-QxAsAX9iGVF5&_nc_ht=scontent.fdac149-1.fna&oh=00_AfBrO1kIWHpRtiWvaBCijPdnA7i2knpjYetV-at7UoE4Gg&oe=64A5C567",
    },
  },
];
