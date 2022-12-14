import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import Image from 'next/future/image'
import { FaPaw } from 'react-icons/fa'
import styles from './about.module.css';

const team = [
    {
        name: "Sean Veres",
        position: "CEO/Manager",
        image: "/images/team/alex.webp"
    },
    {
        name: "Diana Dayton",
        position: "COO/Assistant Manager",
        image: "/images/team/brock.webp"
    },
    {
        name: "Benjamin Demmings",
        position: "CTO/Shift Leader",
        image: "/images/team/bubbles.webp"
    },
    {
        name: "Jonathan Valdez",
        position: "Groomer",
        image: "/images/team/charlie.webp"
    },
    {
        name: "Sarah Parker",
        position: "Groomer",
        image: "/images/team/brock.webp"
    },
    {
        name: "Vera Gan",
        position: "Groomer",
        image: "/images/team/marla.webp"
    },
    {
        name: "Delilah Perry",
        position: "Groomer",
        image: "/images/team/rick.webp"
    },
]




const AboutComp = () => {
    return (
        // <div className={styles.wrapper}>
        <div className="max-w-7xl mx-auto py-40 px-0">
            <h1 className="text-section-h2 text-center">About the Bubbly Pug</h1>
            {/* 
            <div className={styles.aboutText__container}> */}
            <div className="py-10 px-1 flex flex-col-reverse  2xl:flex-row justify-between items-center gap-x-5">
                {/* <p className={styles.about__text}> */}
                <p className="leading-loose max-w-[800px]">
                    We all love our pups. Unfortunately, the pups we love can get absolutely filthy. Their scary claws clack across the hardwood floor. Their thick fur floats throughout the house. Their smelly smell can get, well, smelly. Not only are these problems unpleasant for us humans, they can be downright unhealthy for our loveable pups. Luckily The Bubbly Pug can help with all of these dirty problems to show your fur babies just how much you love them. A happy and healthy dog makes for an even happier and healthier human.

                    <br />
                    <br />

                    Create a personal Pawfile, book appointments, check-in, check-out, manage your memberships, and stay up to date with our newest offerings at The Bubbly Pug!

                    <br />
                    <br />

                    Our Bubbly groomers, state-of-the-art facilities and modern technology-driven approach to dog grooming makes for a streamlined, safe and fun experience for you and your pups.
                </p>
                <Image src="/images/dirty-dog.jpg" width={500} height={500} className="mb-10 rounded-lg shadow-lg float-right" />
            </div>

            <div className="mt-16 flex flex-col-reverse items-center justify-center gap-x-10">
                <h2 className="text-section-h2">The Bubbly Team</h2>
                <Image src="/images/bubbly-pug-icon.png"
                    height={75}
                    width={75}
                    className={`${styles.icon} header__icon`}
                />
            </div>

            <div className="pt-10 px-5 pb-10 flex flex-col items-center gap-10   md:grid md:grid-cols-3 justify-items-center">
                {
                    team.map((team) => (
                        <article className="flex flex-col items-center gap-y-2">

                            <Image src={team.image} width={350} height={350} className="rounded-lg shadow-lg" />
                            <p>{team.name} - {team.position}</p>
                            {/* <p className='font-bold'>{team.position}</p> */}
                        </article>
                    ))
                }
            </div>
            {/* <Link href="/#meetAndGreet"><a className={styles.cta} type="submit"><FaPaw />Book a Meet and Greet!<FaPaw /></a></Link> */}
        </div >
    )
}

export default AboutComp