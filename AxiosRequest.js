import axios from "axios";

const user = 'admin';
const pass = 'admin';

export const  getCity = (villeInput) => {
    let ville = villeInput.toLowerCase().trim();

   return axios.get(`http://bogoville.xyz/rest/region/${ville}`, {
            auth: {
                username: user,
                password: pass
            }
        },
    )

       .then( (res) =>

                    res.data


        )
        .catch(function (error) {
            console.log(error);
        });

};
