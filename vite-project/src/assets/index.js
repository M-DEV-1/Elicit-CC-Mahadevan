// src/assets/index.js

const images = [
    // Creatives committee
    {
      name: "Anvi Sarbhai",
      committee: "Creatives",
      image: 'src/assets/images/Creatives/Anvi_Sarbhai.webp',
      
    },
    {
      name: "Apurv Harsh",
      committee: "Creatives",
      image: 'src/assets/images/Creatives/Apurv_Harsh.webp',
    },
    {
      name: "Manalee",
      committee: "Creatives",
      image: 'src/assets/images/Creatives/Manalee.webp',
    },
    {
      name: "Sanyam Kathed",
      committee: "Creatives",
      image: 'src/assets/images/Creatives/Sanyam_Kathed.webp',
    },
    {
      name: "Vansh Vashist",
      committee: "Creatives",
      image: 'src/assets/images/Creatives/Vansh_Vashist.webp',
    },
    // Web Dev committee
    {
      name: "Amrisha Srivastava",
      committee: "Web Dev",
      image: 'src/assets/images/WebDev/Amrisha_Srivastava.webp',
    },
    {
      name: "Mahadevan KS",
      committee: "Web Dev",
      image: 'src/assets/images/WebDev/Mahadevan_KS.webp',
    },
    {
      name: "Oshika Sharma",
      committee: "Web Dev",
      image: 'src/assets/images/WebDev/Oshika_Sharma.webp',
    },
    // Events committee
    {
      name: "Eshaan Saha",
      committee: "Events",
      image: 'src/assets/images/Events/Eshaan_Saha.webp',
    },
    {
      name: "Eshanya Padial",
      committee: "Events",
      image: 'src/assets/images/Events/Eshanya_Padial.webp',
    },
    {
      name: "Mahak Agrawal",
      committee: "Events",
      image: 'src/assets/images/Events/Mahak_Agrawal.webp',
    },
    {
      name: "Manan Dubey",
      committee: "Events",
      image: 'src/assets/images/Events/Manan_Dubey.webp',
    },
    {
      name: "Osh Gupta",
      committee: "Events",
      image: 'src/assets/images/Events/Osh_Gupta.webp',
    },
    {
      name: "Pranav Deshpande",
      committee: "Events",
      image: 'src/assets/images/Events/Pranav_Deshpande.webp',
    },
    {
      name: "Pranjal Sharma",
      committee: "Events",
      image: 'src/assets/images/Events/Pranjal_Sharma.webp',
    },
    {
      name: "Shivika Singh",
      committee: "Events",
      image: 'src/assets/images/Events/Shivika_Singh.webp',
    },
    {
      name: "Shreya Singh",
      committee: "Events",
      image: 'src/assets/images/Events/Shreya_Singh.webp',
    },
    {
      name: "Veer Sirohia",
      committee: "Events",
      image: 'src/assets/images/Events/Veer_Sirohia.webp',
    },
    // Finance committee
    {
      name: "Akshat Mishra",
      committee: "Finance",
      image: 'src/assets/images/Finance/Akshat_Mishra.webp',
    },
    {
      name: "Anish Mahapatra",
      committee: "Finance",
      image: 'src/assets/images/Finance/Anish_Mahapatra.webp',
    },
    {
      name: "Anshika Kumari",
      committee: "Finance",
      image: 'src/assets/images/Finance/Anshika_Kumari.webp',
    },
    {
      name: "Gurleen Kaur",
      committee: "Finance",
      image: 'src/assets/images/Finance/Gurleen_Kaur.webp',
    },
    {
      name: "Nitya Jain",
      committee: "Finance",
      image: 'src/assets/images/Finance/Nitya_Jain.webp',
    },
    {
      name: "Riddhi Batra",
      committee: "Finance",
      image: 'src/assets/images/Finance/Riddhi_Batra.webp',
    },
    {
      name: "Shikha Srivastava",
      committee: "Finance",
      image: 'src/assets/images/Finance/Shikha_Srivastava.webp',
    },
    {
      name: "Tarni Khatri",
      committee: "Finance",
      image: 'src/assets/images/Finance/Tarni_Khatri.webp',
    },
    // Marketing committee
    {
      name: "Aashi Singh",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Aashi_Singh.webp',
    },
    {
      name: "Adveita Bhargava",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Adveita_Bhargava.webp',
    },
    {
      name: "Aishwika Gupta",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Aishwika_Gupta.webp',
    },
    {
      name: "Aviral Dimri",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Aviral_Dimri.webp',
    },
    {
      name: "Disha Manchanda",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Disha_Manchanda.webp',
    },
    {
      name: "Harman Bhambra",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Harman_Bhambra.webp',
    },
    {
      name: "Mrinal Malik",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Mrinal_Malik.webp',
    },
    {
      name: "Nivan Vashisht",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Nivan_Vashist.webp',
    },
    {
      name: "Palak Bhaiya",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Palak_Bhaiya.webp',
    },
    {
      name: "Pranjana",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Pranjana_Rahangdale.webp',
    },
    {
      name: "Shifa Khan",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Shifa_Khan.webp',
    },
    {
      name: "Tamanna Bhargava",
      committee: "Marketing",
      image: 'src/assets/images/Marketing/Tamanna_Bhargava.webp',
    },
    // Operations committee
    {
      name: "Akash Kumar",
      committee: "Operations",
      image: 'src/assets/images/Operations/Akash_Kumar.webp',
    },
    {
      name: "Kshitij Verma",
      committee: "Operations",
      image: 'src/assets/images/Operations/Kshitij_Verma.webp',
    },
    {
      name: "Nitish Kumar",
      committee: "Operations",
      image: 'src/assets/images/Operations/Nitish_Kumar.webp',
    },
    {
      name: "Piyush Agarwal",
      committee: "Operations",
      image: 'src/assets/images/Operations/Piyush_Agarwal.webp',
    },
    {
      name: "Swarnim Gupta",
      committee: "Operations",
      image: 'src/assets/images/Operations/Swarnim_Gupta.webp',
    },
    {
      name: "Viplav Kumar",
      committee: "Operations",
      image: 'src/assets/images/Operations/Viplav_Kumar.webp',
    },
    // Sponsorships committee
    {
      name: "Aadya Nagar",
      committee: "Sponsorships",
      image: 'src/assets/images/Sponsorships/Aadya_Nagar.webp',
    },
    {
      name: "Arnav Kedia",
      committee: "Sponsorships",
      image: 'src/assets/images/Sponsorships/Arnav_Kedia.webp',
    },
    {
      name: "Churchit Goyal",
      committee: "Sponsorships",
      image: 'src/assets/images/Sponsorships/Churchit_Goyal.webp',
    },
    {
      name: "Mahi Sachdeva",
      committee: "Sponsorships",
      image: 'src/assets/images/Sponsorships/Mahi_Sachdeva.webp',
    },
    {
      name: "Preetansh Singh",
      committee: "Sponsorships",
      image: 'src/assets/images/Sponsorships/Preetansh_Singh.webp',
    },
    {
      name: "Siddham Gupta",
      committee: "Sponsorships",
      image: 'src/assets/images/Sponsorships/Siddham_Gupta.webp',
    },
    {
      name: "Tejal Salathia",
      committee: "Sponsorships",
      image: 'src/assets/images/Sponsorships/Tejal_Salathia.webp',
    },
    // Media committee
    {
      name: "Arif Islam Shaik",
      committee: "Media",
      image: 'src/assets/images/Media/Arif_Islam_Shaik.webp',
    },
    {
      name: "Rishit Jaiswal",
      committee: "Media",
      image: 'src/assets/images/Media/Rishit_Jaiswal.webp',
    }
];

export default images;
