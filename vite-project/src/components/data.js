// src/data.js

import images from "../assets/index";

const teamMembers = images.map((member) => ({
  name: member.name,
  image: member.image,
  committee: member.committee,
}));

export default teamMembers;