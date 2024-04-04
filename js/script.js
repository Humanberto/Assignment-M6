"use strict";
// V-2
window.addEventListener("DOMContentLoaded", () => {
    const getValue = selector => document.querySelector(selector).value;

    document.querySelector("form").addEventListener("submit", evt => {
        evt.preventDefault();

        const id  = getValue("#id"); // I was using: const id  =$("#id").value;
        const name = getValue("#name");
        const ext = getValue("#ext");
        const email = getValue("#email");
        const department = getValue("#department");

        console.log(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}\n`);
        alert(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}\n`);
    });
});


// V-1
// const $ = selector => document.querySelector(selector);

// window.addEventListener("DOMContentLoaded", () => {
//     $("#submit").addEventListener("click", evt => {
//         evt.preventDefault();
//         const id  =$("#id").value;
//         const name = $("#name").value;
//         const ext = $("#ext").value;
//         const email = $("#email").value;
//         const department = $("#department").value;

//         console.log({id,  name, ext, email, department});
//         alert(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}\n`);
//     });
// });