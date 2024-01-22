const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 3000;

const doctors = [
    {
        "name": "Dr Ajit Saxena",
        "specialty": "Neuro",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/urology/dr-ajit-saxena-urology-in-delhi.png"
    },
    {
        "name": "Dr. Archana",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/fetal-medicine/dr-akshata-sharma-fetal-medicine-in-delhi..png"
    },
    {
        "name": "Dr. Akshatha-sharma",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/fetal-medicine/dr-akshatha-sharma-fetal-medicine-in-delhi.png"
    },
    {
        "name": "Dr. Alok kumar",
        "specialty": "Neuro",
        "image": "https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-alok-kumar-agarwal-internal-medicine-in-delhi.png",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Ameet kishore",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/ent/dr-ameet-kishore-ent-in-delhi.png"
    },
    {
        "name": "Dr. Amit Pal",
        "specialty": "Neuro",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/cardiology/dr-amit-mittal-cardiology-in-delhi.png"
    },
    {
        "name": "Dr.Amita Jain",
        "specialty": "Neuro",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/urogynaecology/dr-amita-jain-urogynaecology-in-delhi..png"
    },
    {
        "name": "Dr. Amita Mahajan",
        "specialty": "Neuro",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/oncology/dr-amita-mahajan-oncology-in-delhi.png"
    },
    {
        "name": "Dr. Amitabha-dutta",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/medical-gastroenterology/dr-amitabha-dutta-medical-gastroenterology-in-delhi.png"
    },
    {
        "name": "Dr. Amodita-ahuja-",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/obstetrics-and-gynecology/dr-amodita-ahuja-obstetrics-and-gynecology-in-delhi..png"
    },
    {
        "name": "Dr. Anand Sinha",
        "specialty": "Neuro",
        "city": "mumbai",
        "image": "https://cdn.askapollo.com/live/images/doctors/pediatric-surgery/dr-anand-sinha-pediatric-surgery-in-delhi..png"
    },
    {
        "name": "Dr. Anibha-pandey",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "mumbai",
        "image": "https://cdn.askapollo.com/live/images/doctors/pediatric-neonatology/dr-anibha-pandey-pediatric-neonatology-in-delhi.png"
    },
    {
        "name": "Dr. Anil Mehra",
        "specialty": "Neuro",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/opthalmology/dr-aniel-malhotra-opthalmology-in-delhi.png"
    },
    {
        "name": "Dr. Anil Malik",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/general-and-laparoscopic-surgeon/dr-anil-malik-general-and-laparoscopic-surgeon-in-delhi..png"
    },
    {
        "name": "Dr. Anita Kaul",
        "specialty": "Neuro",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/fetal-medicine/dr-anita-kaul-fetal-medicine-in-delhi.png"
    },
    {
        "name": "Dr. Anuj Mangla",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/dermatology/dr-anju-mangla-dermatology-in-noida.png"
    },
    {
        "name": "Dr. Anoop Bandil",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/orthopaedics/dr-anoop-bandil-orthopaedics-in-delhi.png"
    },
    {
        "name": "Dr. Anoop k ganjoo",
        "specialty": "Neuro",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/cardiothoracic-and-vascular-surgery/dr-anoop-k-ganjoo-cardiothoracic-and-vascular-surgery-in-delhi.jpg"
    },
    {
        "name": "Dr. Anshuman",
        "specialty": "Neuro",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/urology/dr-anshuman-agarwal-urology-in-delhi.png"
    },
    {
        "name": "Dr. Arif",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "mumbai",
        "image": "https://cdn.askapollo.com/live/images/doctors/cardiology/dr-arif-wahab-cardiology-in-delhi.png"
    },
    {
        "name": "Dr. Arun Prasad",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/surgical-gastroenterology/dr-arun-prasad-surgical-gastroenterology-in-delhi.png"
    },
    {
        "name": "Dr. Ashish Gupta",
        "specialty": "Neuro",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/pediatrics/dr-ashish-gupta-pediatrics-in-delhi.png"
    },
    {
        "name": "Dr. Ashish Sabharwal",
        "specialty": "Neuro",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/urology/dr-ashish-sabharwal-urology-in-delhi.png"
    },
    {
        "name": "Dr. Ashok",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/nephrology/dr-ashok-sarin-nephrology-in-delhi.png"
    },
    {
        "name": "Dr. Ashiwini",
        "specialty": "Neuro",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/opthalmology/dr-ashiwini-seth-opthalmology-in-delhi.png"
    },
    {
        "name": "Dr. Avdhesh Bansal",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/respiratory-medicine/dr-avdhesh-bansal-respiratory-medicine-in-delhi.png"
    },
    {
        "name": "Dr. Avneet kaur",
        "specialty": "Neuro",
        "city": "mumbai",
        "image": "https://cdn.askapollo.com/live/images/doctors/pediatric-neonatology/dr-avneet-kaur-pediatric-neonatology-in-delhi.png"
    },
    {
        "name": "Dr. Chandra Mohan",
        "specialty": "Neuro",
        "city": "mumbai",
        "image": "https://cdn.askapollo.com/live/images/doctors/endocrinology/dr-chandar-mohan-batra-endocrinology-in-delhi.png"
    },
    {
        "name": "Dr. Chnder M Malhotra",
        "specialty": "Neuro",
        "city": "pune",
        "image": "https://cdn.askapollo.com/live/images/doctors/neurosurgery/dr-chander-m-malhothra-neurosurgery-in-delhi.png"
    },
    {
        "name": "Dr. Charu Gauba",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad",
        "image": "https://cdn.askapollo.com/live/images/doctors/neurology/dr-charu-gauba-neurology-in-delhi.png"
    },
    {
        "name": "Dr. Col.V Hariharan",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "bangalore",
        "image": "https://cdn.askapollo.com/live/images/doctors/cardiology/dr-col-v-hariharan-cardiology-in-delhi.png"
    },

]

const server = http.createServer((req, res) => {
    // Set CORS headers to allow all origins (you may want to restrict this in production)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/') {
        res.end('hello world');
        return;
    }

    if (reqUrl.pathname === '/api/doctors' && reqUrl.query.city) {
        const city = reqUrl.query.city.toLowerCase();
        const filteredDoctors = doctors.filter(doctor => doctor.city.toLowerCase() === city);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(filteredDoctors));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
