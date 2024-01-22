const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 3000;


const doctors = [
    {
        "name": "Dr. Hema Kapoor",
        "specialty": "Neuro",
        "city": "bangalore"
    },
    {
        "name": "Dr. Archana",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. V.K Mehta",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. Vikash Gupta",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Sanjay kapoor",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. Harsh Kumar",
        "specialty": "Neuro",
        "city": "bangalore"
    },
    {
        "name": "Dr. Karan Bhandari",
        "specialty": "Neuro",
        "city": "bangalore"
    },
    {
        "name": "Dr. Rahul Kumar",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Vaibhav Mishra",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "bangalore"
    },
    {
        "name": "Dr. Ashutosh Singh",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Shubham Singh",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. Dheerendra",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "mumbai"
    },
    {
        "name": "Dr. Kaushik",
        "specialty": "Neuro",
        "city": "bangalore"
    },
    {
        "name": "Dr. Sanjay Sinha",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Arvind kumar",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Ashif",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. Dinkar",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Chirag",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. Neelam",
        "specialty": "Neuro",
        "city": "bangalore"
    },
    {
        "name": "Dr. Brijesh",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "mumbai"
    },
    {
        "name": "Dr. Bhav",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Ayush",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. Bharat",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. Y",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. Aviral",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Shivangi",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "bangalore"
    },
    {
        "name": "Dr. Asmeen",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. Ashish",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. Arpit",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. Anmol",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Ankita",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "bangalore"
    },
    {
        "name": "Dr. Anjali",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. AMrisha",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Amit",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "mumbai"
    },
    {
        "name": "Dr. Alka",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "bangalore"
    },
    {
        "name": "Dr. Aman",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "bangalore"
    },
    {
        "name": "Dr. Akif",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Afreen",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. Ahmad",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. Aditya",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. Adarsh",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Abhishek",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. Abhinav",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. Aakriti",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "mumbai"
    },
    {
        "name": "Dr. Priya",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "bangalore"
    },
    {
        "name": "Dr. Nishtha",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "mumbai"
    },
    {
        "name": "Dr. Aarti",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. Akash",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. randip",
        "specialty": "Neuro",
        "city": "bangalore"
    },
    {
        "name": "Dr. sivir",
        "specialty": "Neuro",
        "city": "bangalore"
    }
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
