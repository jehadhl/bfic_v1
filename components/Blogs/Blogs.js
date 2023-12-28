import React from "react";
import styles from "./Blogs.module.scss";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";

const Blogs = ({ details, titleBlogs }) => {
  const router = useRouter();

  const handleClick = (id) => {
    console.log(id);
    router.push(`/community/${id}`);
  };

  return (
    <section className={styles.blogs}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Latest <span className={styles.spanTitle}> {titleBlogs} </span>
        </h1>

        <div className={styles.flexBlogs}>
          {details?.map((item) => {
            return (
              <div className={styles.cardBlogs} key={item.id}>
                <div className={styles.cardImage}>
                  <div className={styles.imgBox}>
                    <Image
                      src={item.imgUrl}
                      width={300}
                      height={250}
                      className={styles.imageBlog}
                      quality={100}
                    />
                  </div>
                </div>
                <div className={styles.contents}>
                  <h2 className={styles.contentsTitle}>{item.name}</h2>
                  <p className={styles.date}>
                    Date: <span className={styles.spanDate}>10/03/2023 </span>
                  </p>

                  <button
                    className={styles.btn}
                    onClick={() => handleClick(item.id)}
                  >
                    More Details{" "}
                    <BsArrowRight className={styles.icon} color={"#fff"} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
