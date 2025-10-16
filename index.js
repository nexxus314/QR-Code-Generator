import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        { message: "Whats the URL you wanna Generate a QR for?", name: "URL" }])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_code.png'));
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            
        } else {
            
        }
    });