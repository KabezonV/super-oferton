const offers =[
  {
    "id": 1,
    "title": "Pechuga de pollo con un 30% de descuento",
    "description": "Aprovecha esta increíble oferta en pechuga de pollo fresca de primera calidad, con un 30% de descuento sobre el precio habitual. ¡Ideal para tus comidas saludables y válida hasta agotar existencias o final de semana!",
    "merchantName": "Tu Carnicero de Confianza",
    "avatarUrl": "https://placehold.co/100x100/FF5733/FFFFFF?text=Carnicero", 
    "photos": [
      "https://placehold.co/600x400/33FF57/000000?text=Pechuga+Pollo+1", 
      "https://placehold.co/600x400/5733FF/FFFFFF?text=Pechuga+Pollo+2"
    ],
    "categories": ["alimentacion", "carniceria", "frescos", "descuento"], 
    "offerType": "Porcentaje", 
    "discountPercentage": 30, 
    "originalPrice": 8.50, 
    "finalPrice": 5.95, 
    "currency": "EUR", 
    "startDate": "2025-07-08T09:00:00Z", 
    "endDate": "2025-07-15T23:59:59Z", 
    "isActive": true, 
    "location": {
      "lat": 37.2185, 
      "lng": -3.6705, 
      "city": "Atarfe",
      "region": "Andalucía",
      "postalCode": "18230", 
      "streetType": "Calle",
      "streetName": "Paloma", 
      "streetNumber": "3"
    },
    "contact": { 
      "phone": "+34600123456",
      "website": "https://tucarnicerodeconfianza.es",
      "email": "info@tucarnicerodeconfianza.es"
    },
    "views": 1500, 
    "likes": 120 
  },
  {
    "id": 2,
    "title": "Masaje relajante 2x1",
    "description": "Disfruta de un masaje relajante y llévate otro completamente gratis. Ideal para compartir o para un doble disfrute personal. ¡Reserva ya tu momento de bienestar!",
    "merchantName": "Final Feliz Spa",
    "avatarUrl": "https://placehold.co/100x100/3366FF/FFFFFF?text=Spa",
    "photos": [
      "https://placehold.co/600x400/FF3366/000000?text=Masaje+1",
      "https://placehold.co/600x400/66FF33/000000?text=Masaje+2"
    ],
    "categories": ["belleza", "salud", "bienestar", "2x1"],
    "offerType": "2x1",
    "originalPrice": 60.00,
    "finalPrice": 60.00, 
    "currency": "EUR",
    "startDate": "2025-07-01T10:00:00Z",
    "endDate": "2025-08-31T20:00:00Z",
    "isActive": true,
    "location": {
      "lat": 37.9890, 
      "lng": -1.1300, 
      "city": "Murcia",
      "region": "Murcia",
      "postalCode": "30002", 
      "streetType": "Avenida",
      "streetName": "Paquita",
      "streetNumber": "5"
    },
    "contact": {
      "phone": "+34699876543",
      "website": "https://finalfelizspa.es",
      "email": "reservas@finalfelizspa.es"
    },
    "views": 2100,
    "likes": 250
  },
  {
    "id": 3,
    "title": "3 bragas por 1 euro",
    "description": "¡Renueva tu cajón de ropa interior con esta oferta increíble! Llévate 3 bragas de alta calidad por solo 1 euro. Variedad de tallas y colores disponibles.",
    "merchantName": "Modas Modernas",
    "avatarUrl": "https://placehold.co/100x100/8A2BE2/FFFFFF?text=Modas",
    "photos": [
      "https://placehold.co/600x400/FFD700/000000?text=Bragas+1",
      "https://placehold.co/600x400/ADFF2F/000000?text=Bragas+2"
    ],
    "categories": ["moda", "ropa interior", "descuento"],
    "offerType": "Cantidad Fija",
    "originalPrice": 5.00, 
    "finalPrice": 1.00,
    "currency": "EUR",
    "startDate": "2025-07-10T09:30:00Z",
    "endDate": "2025-07-20T21:00:00Z",
    "isActive": true,
    "location": {
      "lat": 37.7780, 
      "lng": -3.7905, 
      "city": "Jaén",
      "region": "Andalucía",
      "postalCode": "23001",
      "streetType": "Calle",
      "streetName": "Tigre",
      "streetNumber": "23"
    },
    "contact": {
      "phone": "+34654321098",
      "website": "https://modasmodernas.es",
      "email": "contacto@modasmodernas.es"
    },
    "views": 980,
    "likes": 75
  },
  {
    "id": 4,
    "title": "Ponte guapo al 50% a golpe de bisturí",
    "description": "Black Friday en cirugía estética. Aprovecha un 50% de descuento en tratamientos seleccionados. Consulta sin compromiso y luce tu mejor versión.",
    "merchantName": "Clínica Puri",
    "avatarUrl": "https://placehold.co/100x100/FF6347/FFFFFF?text=Clínica",
    "photos": [
      "https://placehold.co/600x400/4682B4/000000?text=Cirugia+1",
      "https://placehold.co/600x400/DAA520/000000?text=Cirugia+2"
    ],
    "categories": ["salud", "belleza", "cirugia", "blackfriday", "descuento"],
    "offerType": "Porcentaje",
    "discountPercentage": 50,
    "originalPrice": 2000.00, 
    "finalPrice": 1000.00,
    "currency": "EUR",
    "startDate": "2025-11-20T09:00:00Z",
    "endDate": "2025-11-30T23:59:59Z",
    "isActive": false, 
    "location": {
      "lat": 40.4168, 
      "lng": -3.7038, 
      "city": "Madrid",
      "region": "Madrid",
      "postalCode": "28006",
      "streetType": "Calle",
      "streetName": "Leona",
      "streetNumber": "56"
    },
    "contact": {
      "phone": "+34912345678",
      "website": "https://clinicapuri.es",
      "email": "info@clinicapuri.es"
    },
    "views": 3200,
    "likes": 450
  },
  {
    "id": 5,
    "title": "1 bote de Colacao y de regalo un chorizo",
    "description": "¡Ofertón para tus desayunos y meriendas! Compra 1 kg de Colacao y te regalamos un delicioso chorizo. ¡Una combinación perfecta para empezar el día!",
    "merchantName": "La Tienda de Lolita",
    "avatarUrl": "https://placehold.co/100x100/8B4513/FFFFFF?text=Tienda",
    "photos": [
      "https://placehold.co/600x400/D2B48C/000000?text=Colacao+Chorizo+1",
      "https://placehold.co/600x400/F4A460/000000?text=Colacao+Chorizo+2"
    ],
    "categories": ["alimentacion", "supermercado", "regalo", "bebidas", "embutidos"],
    "offerType": "Regalo",
    "originalPrice": 7.50, 
    "finalPrice": 7.50, 
    "currency": "EUR",
    "startDate": "2025-07-01T08:30:00Z",
    "endDate": "2025-07-31T21:00:00Z",
    "isActive": true,
    "location": {
      "lat": 38.7600, 
      "lng": -3.3900, 
      "city": "Valdepeñas",
      "region": "Castilla-La Mancha",
      "postalCode": "13300",
      "streetType": "Calle",
      "streetName": "Mazapán",
      "streetNumber": "36"
    },
    "contact": {
      "phone": "+34678901234",
      "website": "https://latiendadelolita.es",
      "email": "info@latiendadelolita.es"
    },
    "views": 800,
    "likes": 60
  },
  {
    "id": 6,
    "title": "Super chollo en fideos a mitad de precio",
    "description": "¡No te quedes sin tus fideos favoritos! Oferta especial a mitad de precio en todas las variedades de pasta. ¡Ideal para tus recetas caseras!",
    "merchantName": "Super Tony",
    "avatarUrl": "https://placehold.co/100x100/B0E0E6/000000?text=Super",
    "photos": [
      "https://placehold.co/600x400/87CEEB/000000?text=Fideos+1",
      "https://placehold.co/600x400/6A5ACD/FFFFFF?text=Fideos+2"
    ],
    "categories": ["alimentacion", "supermercado", "pasta", "descuento"],
    "offerType": "Porcentaje",
    "discountPercentage": 50,
    "originalPrice": 1.50,
    "finalPrice": 0.75,
    "currency": "EUR",
    "startDate": "2025-07-05T09:00:00Z",
    "endDate": "2025-07-12T23:59:59Z",
    "isActive": true,
    "location": {
      "lat": 43.0100, 
      "lng": -7.5500, 
      "city": "Lugo",
      "region": "Galicia",
      "postalCode": "27001",
      "streetType": "Avenida",
      "streetName": "Pokemon",
      "streetNumber": "2"
    },
    "contact": {
      "phone": "+34654987321",
      "website": "https://supertony.es",
      "email": "info@supertony.es"
    },
    "views": 1100,
    "likes": 90
  },
  {
    "id": 7,
    "title": "Benidorm a saldo + sombrilla de regalo",
    "description": "Viaja a Benidorm con los precios más bajos del mercado y, de regalo, una sombrilla de playa para tus días de sol. ¡No dejes escapar esta oportunidad única!",
    "merchantName": "Viajes La Chirla de Oro",
    "avatarUrl": "https://placehold.co/100x100/FFDAB9/000000?text=Viajes",
    "photos": [
      "https://placehold.co/600x400/F08080/FFFFFF?text=Benidorm+1",
      "https://placehold.co/600x400/ADD8E6/000000?text=Benidorm+2"
    ],
    "categories": ["viajes", "vacaciones", "playa", "regalo", "descuento"],
    "offerType": "Regalo + Descuento",
    "originalPrice": 400.00, 
    "finalPrice": 350.00,
    "currency": "EUR",
    "startDate": "2025-07-01T09:00:00Z",
    "endDate": "2025-09-30T18:00:00Z",
    "isActive": true,
    "location": {
      "lat": 40.3423, 
      "lng": -0.8099, 
      "city": "Teruel",
      "region": "Aragón",
      "postalCode": "44001", 
      "streetType": "Calle",
      "streetName": "Rosalía",
      "streetNumber": "37"
    },
    "contact": {
      "phone": "+34978112233",
      "website": "https://viajeslachirladeoro.es",
      "email": "info@viajeslachirladeoro.es"
    },
    "views": 1800,
    "likes": 180
  },
  {
    "id": 8,
    "title": "Chollazo en gambas, 30% descuento",
    "description": "¡Frescas y deliciosas gambas con un 30% de descuento! Perfectas para una cena especial o para picotear. ¡No te quedes sin ellas!",
    "merchantName": "Pescadería Mari Puri",
    "avatarUrl": "https://placehold.co/100x100/20B2AA/FFFFFF?text=Pescadería",
    "photos": [
      "https://placehold.co/600x400/40E0D0/000000?text=Gambas+1",
      "https://placehold.co/600x400/66CDAA/000000?text=Gambas+2"
    ],
    "categories": ["alimentacion", "pescaderia", "marisco", "descuento"],
    "offerType": "Porcentaje",
    "discountPercentage": 30,
    "originalPrice": 15.00, 
    "finalPrice": 10.50,
    "currency": "EUR",
    "startDate": "2025-07-09T10:00:00Z",
    "endDate": "2025-07-16T14:00:00Z",
    "isActive": true,
    "location": {
      "lat": 38.8770, 
      "lng": -6.9700, 
      "city": "Badajoz",
      "region": "Extremadura",
      "postalCode": "06002",
      "streetType": "Camino",
      "streetName": "de la Rana",
      "streetNumber": "4"
    },
    "contact": {
      "phone": "+34611223344",
      "website": "https://pescaderiamaripuri.es",
      "email": "pedidos@pescaderiamaripuri.es"
    },
    "views": 1300,
    "likes": 110
  },
  {
    "id": 9,
    "title": "Patinete eléctrico a 100 Euros",
    "description": "¡Viaja por la ciudad a un precio escandaloso! Patinete eléctrico de última generación por solo 100 euros. ¡Unidades limitadas!",
    "merchantName": "Patinetes Super Mario",
    "avatarUrl": "https://placehold.co/100x100/FF4500/FFFFFF?text=Patinetes",
    "photos": [
      "https://placehold.co/600x400/FF8C00/000000?text=Patinete+1",
      "https://placehold.co/600x400/FFA500/000000?text=Patinete+2"
    ],
    "categories": ["tecnologia", "movilidad", "vehiculos", "descuento"],
    "offerType": "Precio Fijo",
    "originalPrice": 300.00,
    "finalPrice": 100.00,
    "currency": "EUR",
    "startDate": "2025-07-12T10:00:00Z",
    "endDate": "2025-07-19T22:00:00Z",
    "isActive": true,
    "location": {
      "lat": 41.7630, 
      "lng": -2.4700, 
      "city": "Soria",
      "region": "Castilla y León",
      "postalCode": "42001",
      "streetType": "Calle",
      "streetName": "Desencanto",
      "streetNumber": "10"
    },
    "contact": {
      "phone": "+34622334455",
      "website": "https://patinetessupermario.es",
      "email": "ventas@patinetessupermario.es"
    },
    "views": 2500,
    "likes": 300
  },
  {
    "id": 10,
    "title": "Ofertón de iPhone con 200 euros de descuento",
    "description": "¡Consigue tu nuevo iPhone con un descuento de 200 euros! Modelos seleccionados. ¡La tecnología más avanzada a tu alcance por menos!",
    "merchantName": "Teleco Sara",
    "avatarUrl": "https://placehold.co/100x100/6A5ACD/FFFFFF?text=Teleco",
    "photos": [
      "https://placehold.co/600x400/483D8B/000000?text=iPhone+1",
      "https://placehold.co/600x400/000080/FFFFFF?text=iPhone+2"
    ],
    "categories": ["tecnologia", "electronica", "moviles", "descuento"],
    "offerType": "Descuento Fijo",
    "discountValue": 200.00, 
    "originalPrice": 899.00, 
    "finalPrice": 699.00,
    "currency": "EUR",
    "startDate": "2025-07-01T09:00:00Z",
    "endDate": "2025-07-31T20:00:00Z",
    "isActive": true,
    "location": {
      "lat": 43.2570, 
      "lng": -2.9230, 
      "city": "Bilbao",
      "region": "País Vasco",
      "postalCode": "48001",
      "streetType": "Calle",
      "streetName": "Malas Pulgas",
      "streetNumber": "22"
    },
    "contact": {
      "phone": "+34944112233",
      "website": "https://telecosara.es",
      "email": "info@telecosara.es"
    },
    "views": 3500,
    "likes": 500
  }
]
export default offers;