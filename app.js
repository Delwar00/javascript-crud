const skills=document.querySelector('#skills_list');

function skills_load(){
    // fetch('http://localhost:5050/skill').then(data=>data.json()).then(data=>{
    //     let skills_list='';
    //     data.map(skill=>{
    //         skills_list +=` <option value="${skill.id}">${skill.name}</option>`;
    //     });
    //     skills.insertAdjacentHTML('beforeend',skills_list);
    // });
    axios.get('http://localhost:5050/skill').then(alldata=>{
        let skills_list='';
        alldata.data.map(skill=>{
            skills_list +=` <option value="${skill.id}">${skill.name}</option>`;
        });
        skills.insertAdjacentHTML('beforeend',skills_list);
    });
}
skills_load();