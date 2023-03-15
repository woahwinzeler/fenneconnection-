import listFilesPaginated from "@/lib/googleClient";
import React from "react";

export default function Feed(){

  //todo: fetch source urls and metadata from google cloud storage

  listFilesPaginated(); 

  //render that content 

  return(
    <>

      images will appear here

            <article className="post">
          <img src="https://storage.googleapis.com/content-1/drive-download-20230125T210358Z-001/3S6A4146.JPG" alt="CORRIDOR SONG" className="img" />
        </article>
        <article className="post">
          <img src="https://storage.googleapis.com/content-1/drive-download-20230125T210358Z-001/CORRIDOR%20SONG%20(1).png" alt="CORRIDOR SONG" className="img" />
        </article>
        <article className="post">
          <img src="https://storage.googleapis.com/content-1/drive-download-20230125T210358Z-001/IMG_0150.JPG" alt="CORRIDOR SONG" className="img" />
        </article>
        <article className="post">
          <img src="https://storage.googleapis.com/content-1/drive-download-20230125T210358Z-001/IMG_1745.JPG" alt="CORRIDOR SONG" className="img" />
        </article>
        <article className="post">
          <img src="https://storage.googleapis.com/content-1/drive-download-20230125T210358Z-001/CORRIDOR%20SONG.png" alt="CORRIDOR SONG" className="img" />
        </article>
        <article className="post">
          <img src="https://storage.googleapis.com/content-1/drive-download-20230125T210358Z-001/famous-jackson-pollock-paintings.png" alt="CORRIDOR SONG" className="img" />
        </article>
    </>
  )
}