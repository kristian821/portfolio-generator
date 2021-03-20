const profileDataArgs = process.argv.slice(2, process.argv.length);

const pringProfileData = (profileDataArr) => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

pringProfileData(profileDataArgs);