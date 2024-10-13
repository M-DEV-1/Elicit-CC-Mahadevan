// src/assets/index.js

const images = [
    // Creatives committee
    {
      name: "Anvi Sarbhai",
      committee: "Creatives",
      image: '../assets/images/Creatives/Anvi_Sarbhai.jpg',
    },
    {
      name: "Apurv Harsh",
      committee: "Creatives",
      image: '../assets/images/Creatives/Apurv_Harsh.jpg',
    },
    {
      name: "Manalee",
      committee: "Creatives",
      image: '../assets/images/Creatives/Manalee.jpg',
    },
    {
      name: "Sanyam Kathed",
      committee: "Creatives",
      image: '../assets/images/Creatives/Sanyam_Kathed.jpg',
    },
    {
      name: "Vansh Vashist",
      committee: "Creatives",
      image: '../assets/images/Creatives/Vansh_Vashist.jpg',
    },
    // Events committee
    {
      name: "Eshaan Saha",
      committee: "Events",
      image: '../assets/images/Events/Eshaan_Saha.jpg',
    },
    {
      name: "Eshanya Padial",
      committee: "Events",
      image: '../assets/images/Events/Eshanya_Padial.jpg',
    },
    {
      name: "Mahak Agarwal",
      committee: "Events",
      image: '../assets/images/Events/Mahak_Agarwal.jpg',
    },
    {
      name: "Manan Dubey",
      committee: "Events",
      image: '../assets/images/Events/Manan_Dubey.jpg',
    },
    {
      name: "Osh Gupta",
      committee: "Events",
      image: '../assets/images/Events/Osh_Gupta.jpg',
    },
    {
      name: "Pranav Deshpande",
      committee: "Events",
      image: '../assets/images/Events/Pranav_Deshpande.jpg',
    },
    {
      name: "Pranjal Sharma",
      committee: "Events",
      image: '../assets/images/Events/Pranjal_Sharma.jpg',
    },
    {
      name: "Shivika Singh",
      committee: "Events",
      image: '../assets/images/Events/Shivika_Singh.jpg',
    },
    {
      name: "Shreya Singh",
      committee: "Events",
      image: '../assets/images/Events/Shreya_Singh.jpg',
    },
    {
      name: "Veer Sirohia",
      committee: "Events",
      image: '../assets/images/Events/Veer_Sirohia.jpg',
    },
    // Finance committee
    {
      name: "Akshat Mishra",
      committee: "Finance",
      image: '../assets/images/Finance/Akshat_Mishra.jpg',
    },
    {
      name: "Anish Mahapatra",
      committee: "Finance",
      image: '../assets/images/Finance/Anish_Mahapatra.jpg',
    },
    {
      name: "Anshika Kumari",
      committee: "Finance",
      image: '../assets/images/Finance/Anshika_Kumari.jpg',
    },
    {
      name: "Gurleen Kaur",
      committee: "Finance",
      image: '../assets/images/Finance/Gurleen_Kaur.jpg',
    },
    {
      name: "Nitya Jain",
      committee: "Finance",
      image: '../assets/images/Finance/Nitya_Jain.jpg',
    },
    {
      name: "Riddhi Batra",
      committee: "Finance",
      image: '../assets/images/Finance/Riddhi_Batra.jpg',
    },
    {
      name: "Shikha Srivastava",
      committee: "Finance",
      image: '../assets/images/Finance/Shikha_Srivastava.jpg',
    },
    {
      name: "Tarni Khatri",
      committee: "Finance",
      image: '../assets/images/Finance/Tarni_Khatri.jpg',
    },
    // Marketing committee
    {
      name: "Aashi Singh",
      committee: "Marketing",
      image: '../assets/images/Marketing/Aashi_Singh.jpg',
    },
    {
      name: "Adveita Bhargava",
      committee: "Marketing",
      image: '../assets/images/Marketing/Adveita_Bhargava.jpg',
    },
    {
      name: "Aishwika Gupta",
      committee: "Marketing",
      image: '../assets/images/Marketing/Aishwika_Gupta.jpg',
    },
    {
      name: "Aviral Dimri",
      committee: "Marketing",
      image: '../assets/images/Marketing/Aviral_Dimri.jpg',
    },
    {
      name: "Disha Manchanda",
      committee: "Marketing",
      image: '../assets/images/Marketing/Disha_Manchanda.jpg',
    },
    {
      name: "Harman Bhambra",
      committee: "Marketing",
      image: '../assets/images/Marketing/Harman_Bhambra.jpg',
    },
    {
      name: "Mrinal Malik",
      committee: "Marketing",
      image: '../assets/images/Marketing/Mrinal_Malik.jpg',
    },
    {
      name: "Nivan Vashisht",
      committee: "Marketing",
      image: '../assets/images/Marketing/Nivan_Vashisht.jpg',
    },
    {
      name: "Palak Bhaiya",
      committee: "Marketing",
      image: '../assets/images/Marketing/Palak_Bhaiya.jpg',
    },
    {
      name: "Pranjana Rahangdale",
      committee: "Marketing",
      image: '../assets/images/Marketing/Pranjana_Rahangdale.jpg',
    },
    {
      name: "Shifa Khan",
      committee: "Marketing",
      image: '../assets/images/Marketing/Shifa_Khan.jpg',
    },
    {
      name: "Tamanna Bhargava",
      committee: "Marketing",
      image: '../assets/images/Marketing/Tamanna_Bhargava.jpg',
    },
    // Media committee
    {
      name: "Arif Islam Shaik",
      committee: "Media",
      image: '../assets/images/Media/Arif_Islam_Shaik.jpg',
    },
    {
      name: "Rishit Jaiswal",
      committee: "Media",
      image: '../assets/images/Media/Rishit_Jaiswal.jpg',
    },
    // Operations committee
    {
      name: "Akash Kumar",
      committee: "Operations",
      image: '../assets/images/Operations/Akash_Kumar.jpg',
    },
    {
      name: "Kshitij Verma",
      committee: "Operations",
      image: '../assets/images/Operations/Kshitij_Verma.jpg',
    },
    {
      name: "Nitish Kumar",
      committee: "Operations",
      image: '../assets/images/Operations/Nitish_Kumar.jpg',
    },
    {
      name: "Piyush Agarwal",
      committee: "Operations",
      image: '../assets/images/Operations/Piyush_Agarwal.jpg',
    },
    {
      name: "Swarnim Gupta",
      committee: "Operations",
      image: '../assets/images/Operations/Swarnim_Gupta.jpg',
    },
    {
      name: "Viplav Kumar",
      committee: "Operations",
      image: '../assets/images/Operations/Viplav_Kumar.jpg',
    },
    // Sponsorships committee
    {
      name: "Aadya Nagar",
      committee: "Sponsorships",
      image: '../assets/images/Sponsorships/Aadya_Nagar.jpg',
    },
    {
      name: "Arnav Kedia",
      committee: "Sponsorships",
      image: '../assets/images/Sponsorships/Arnav_Kedia.jpg',
    },
    {
      name: "Churchit Goyal",
      committee: "Sponsorships",
      image: '../assets/images/Sponsorships/Churchit_Goyal.jpg',
    },
    {
      name: "Mahi Sachdeva",
      committee: "Sponsorships",
      image: '../assets/images/Sponsorships/Mahi_Sachdeva.jpg',
    },
    {
      name: "Preetansh Singh",
      committee: "Sponsorships",
      image: '../assets/images/Sponsorships/Preetansh_Singh.jpg',
    },
    {
      name: "Siddham Gupta",
      committee: "Sponsorships",
      image: '../assets/images/Sponsorships/Siddham_Gupta.jpg',
    },
    {
      name: "Tejal Salathia",
      committee: "Sponsorships",
      image: '../assets/images/Sponsorships/Tejal_Salathia.jpg',
    },
    {
      name: "Mahadevan KS",
      committee: "Web Dev",
      image: '../assets/images/WebDev/Mahadevan_KS.jpg',
    }
];

export default images;
