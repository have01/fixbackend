const http = require('http');
const url = require('url');
const PORT = 3000;

const doctors = [
    {
        "name": "Dr. B",
        "specialty": "Neuro",
        "city": "banglore"
    },
    {
        "name": "Dr. C",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. D",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. E",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. F",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. G",
        "specialty": "Neuro",
        "city": "banglore"
    },
    {
        "name": "Dr. H",
        "specialty": "Neuro",
        "city": "banglore"
    },
    {
        "name": "Dr. I",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. J",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "banglore"
    },
    {
        "name": "Dr. K",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. L",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. M",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "mumbai"
    },
    {
        "name": "Dr. N",
        "specialty": "Neuro",
        "city": "banglore"
    },
    {
        "name": "Dr. O",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. P",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. Q",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. R",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. S",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. T",
        "specialty": "Neuro",
        "city": "banglore"
    },
    {
        "name": "Dr. U",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "mumbai"
    },
    {
        "name": "Dr. V",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. W",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. X",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. Y",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. Z",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. [",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "banglore"
    },
    {
        "name": "Dr. \\",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. ]",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. ^",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. _",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. `",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "banglore"
    },
    {
        "name": "Dr. a",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. b",
        "specialty": "Neuro",
        "city": "hyderabad"
    },
    {
        "name": "Dr. c",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "mumbai"
    },
    {
        "name": "Dr. d",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "banglore"
    },
    {
        "name": "Dr. e",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "banglore"
    },
    {
        "name": "Dr. f",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. g",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. h",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. i",
        "specialty": "Neuro",
        "city": "mumbai"
    },
    {
        "name": "Dr. j",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "hyderabad"
    },
    {
        "name": "Dr. k",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. l",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "pune"
    },
    {
        "name": "Dr. m",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "mumbai"
    },
    {
        "name": "Dr. n",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "banglore"
    },
    {
        "name": "Dr. o",
        "specialty": "MPTh (Neuro Sciences)",
        "city": "mumbai"
    },
    {
        "name": "Dr. p",
        "specialty": "MPTh (Musculoskeletal)",
        "city": "pune"
    },
    {
        "name": "Dr. q",
        "specialty": "Neuro",
        "city": "pune"
    },
    {
        "name": "Dr. r",
        "specialty": "Neuro",
        "city": "banglore"
    },
    {
        "name": "Dr. s",
        "specialty": "Neuro",
        "city": "banglore"
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