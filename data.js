const data = [
    {
        name: "Ust. Khalid Basalamah",
        tema: "Sirah Nabawiyyah",
        info: "https://www.youtube.com/playlist?list=PLlK0gGuioshBgZZf8VOC4IonQtFxPsifW"
    },
    {
        name: "Ust. Adi Hidayat",
        tema: "Wudhu Sesuai Sunnah",
        info: "https://www.youtube.com/watch?v=zcp9XMZz5ac"
    },
    {
        name: "Ust. Felix Siauw",
        tema: "Mukjizat Terakhir",
        info: "https://www.youtube.com/watch?v=I_awQvuYU3A"
    },
    {
        name: "Ust. Abdul Somad",
        tema: "Sayangi Orangtua",
        info: "https://www.youtube.com/watch?v=QvgnZB0-k4c"
    },
    {
        name: "Ust. Syafiq Basalamah",
        tema: "Bekal Alam Kubur",
        info: "https://www.youtube.com/watch?v=E8-e_-dbdbY"
    }
];

const table = document.getElementById("myTable");

data.forEach(function (item, index) {
    const row = table.insertRow(index);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = item.name;
    cell2.innerHTML = item.tema;
    cell3.innerHTML = "<a target='_blank' href=" + item.info + ">Watch</a>";
});