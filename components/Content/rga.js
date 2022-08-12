export const rga = {
    title: "R/GA's Heuristic Collector",
    year: "2022",
    client: "R/GA",
    role: "Prototyping, UI, Front-end",
    company_name: "R/GA",
    company_url: "https://www.rga.com",
    project: [
        `<p>DISCLAIMER: <br>For privacy reasons, <b>all retailer data shown here is dummy.</b></p>`,
        `Spreadsheets are great for storing and visualizing data.`,
        `It turns out that when we need to run a heuristic evaluation, using a smartphone, tablet or even a laptop, it is quite difficult to manually enter data into these spreadsheets. Especially when there are many columns.`,
        `Because of that, I created and developed a specific app (mobile and desktop) so that the UX evaluators could collect and save the observed data during the analysis.`,
        `The app (in MVP) allows you not only to insert the heuristic score, but also to insert comments, paste a link with screenshots, and even insert extra findings that can be classified as Good, Bad or Neutral.`,

        `Another advantage is that the color classification of extra finds is now fully automated. All of this cut data collection time by almost half.`,
    ],
    access: "https://heuristic-scores-form.vercel.app",
    featured_image: "port-featured-rga.png",
    sections: [
        {
            title: "Concept and Architecture",
            text: [
                `We needed to deal with three entities: Players, Heuristics, and Journeys.`,
                `Each retailer (or player) was evaluated in one or more journeys. So, the list of heuristics could vary according to the journey.`,
            ],
            image: "port-sec1-rga.png",
            image_full: "port-sec1a-rga.svg",
            bg_color_class: "bg-[#5582C4]",
            text_color_class: "text-white/70",
        },
        {
            title: "Managing the data",
            text: [
                `All data collected is stored in a Google Sheets document in raw and human-readable format.`,
            ],
            bg_color_class: "bg-white",
            image: "port-sec2-rga.svg",
            image_full: "port-sec2a-rga.png",
            image_full_stretch: true,
            image_classname: "w-52 mx-auto",
        },
        {
            title: "The Web App",
            text: [
                `Now the data is exposed in a much easier to read way. In addition, entering the collected data has become much simpler and frictionless. 😻`,
            ],
            image: "port-sec3-rga.webm",
            video_classname: "flex-1",
            bg_color_class: "bg-[#1671fc]",
            text_color_class: "text-white/80",
        },
        {
            title: "The PWA",
            text: [
                `For better user experience (or would it be designer experience? LoL), I turned the application into Progressive Web App (PWA), so it works offline too.`,
                `<b>Tech Stack</b>`,
                `I built the web application using Next.Js / React as the front end.`,
                `Before migrating the data to the spreadsheet, the collected data was stored in MongoDB.`,
            ],
            image: "port-sec4-rga.png",
            bg_color_class: "bg-white",
        },
    ],
};
