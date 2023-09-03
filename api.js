// Function Formate Date Id
function formatDate(inputDate){
    const date = new Date(inputDate);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const formattedDate = date.toLocaleDateString('id-ID', options);
    return formattedDate
}

// Get API Berita Terbaru
const getBerita = async() => {
    const response = await fetch('https://api-berita-indonesia.vercel.app/cnbc/terbaru').then((res)=>res.json())
    const data = response.data
    return data
}

// Get API Berita Bola
const getBeritaBola = async() => {
    const response = await fetch('https://api-berita-indonesia.vercel.app/antara/bola').then((res)=>res.json())
    const data = response.data
    return data
}

// Add Thumbnail
const addThumbnail = async() => {
    const img = document.querySelector('#thumbnail')
    const title = document.querySelector('#title-thumbnail')
    const description = document.querySelector('#description-thumbnail')
    const selengkapnya = document.querySelector('#selengkapnya-thumbnail')
    const datetime = document.querySelector('#datetime-thumbnail')

    // Get Function GetBerita
    const response  = await getBerita()
    const data = response.posts[0]

    const tanggal = formatDate(data.pubDate)

    img.src = data.thumbnail
    title.innerText = data.title
    description.innerText = data.description
    selengkapnya.href = data.link
    datetime.innerText = tanggal
    
}
addThumbnail()

// Filter 6 Berita Terbaru
const filterBeritaTerbaru = async()=>{
    let newBerita = []
    const response = await getBerita()
    const data = response.posts
    for (let i = 1; i < 7; i++) {
        const element = data[i];
        newBerita.push(element)
    }
    return newBerita
}

// Filter 6 Berita Bola
const filterBeritaBola = async()=>{
    let newBeritaBola = []
    const response = await getBeritaBola()
    const data = response.posts
    for (let i = 1; i < 7; i++) {
        const element = data[i];
        newBeritaBola.push(element)
    }
    // console.log(newBeritaBola)
    return newBeritaBola
}


// Create Card Berita Terupdate
const addContentTerupdate = async() => {
    const data = await filterBeritaTerbaru()
    data.forEach((item) => {
        const addContentTerupdate = document.querySelector('#contentTerbaru')
        const tanggal = formatDate(item.pubDate)
        const div = document.createElement('div')
        div.classList = 'lg:w-1/2 xl:w-1/3 md:w-1/2 w-full mb-3 '
        div.innerHTML = `<div class="h-full">
        <div class="px-3 mx-2 py-3 rounded-lg bg-slate-300 h-full shadow-lg">
        <img src="${item.thumbnail}" alt="" class=" rounded-lg w-full h-52">
        <h2 id="title" class="text-center font-medium my-2">${item.title}</h2>
        <p>${item.description}</p>
        <a href="${item.link}" class="text-left me-auto underline text-blue-600">Selengkapnya...</a>
        <p class="text-base font-extralight italic " id="datetime-thumbnail">${tanggal}</p>
        </div>
        </div>`
        addContentTerupdate.appendChild(div)
    })
    // div.classList = 'w-1/3 mb-3'
}
addContentTerupdate()

// Cretate Card Berita Bola
const addContentBola = async() => {
    const addContentTerupdate = document.querySelector('#contentBola')
    const data = await filterBeritaBola()
    data.forEach((item) => {
        const tanggal = formatDate(item.pubDate)
        const div = document.createElement('div')
        div.classList = 'lg:w-1/2 xl:w-1/3 md:w-1/2 w-full mb-3 '
        div.innerHTML = `<div class="h-full">
        <div class="px-3 mx-2 py-3 rounded-lg bg-slate-300 h-full shadow-lg">
        <img src="${item.thumbnail}" alt="" class=" rounded-lg w-full h-52">
        <h2 id="title" class="text-center font-medium my-2">${item.title}</h2>
        <p>${item.description}</p>
        <a href="${item.link}" class="text-left me-auto underline text-blue-600">Selengkapnya...</a>
        <p class="text-base font-extralight italic " id="datetime-thumbnail">${tanggal}</p>
        </div>
        </div>`
        addContentTerupdate.appendChild(div)
    })
    // div.classList = 'w-1/3 mb-3'
}

addContentBola()


