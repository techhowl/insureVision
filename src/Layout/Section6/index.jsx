
import React,{useEffect, useRef, useState } from "react"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ArrowUp from "../../assets/arrowup.png"
import ArrowDown from "../../assets/arrowdown.png"


gsap.registerPlugin(ScrollTrigger)

export default function Section6() {
  const [activeMember, setActiveMember] = useState(1)
  const containerRef = useRef(null)
  const totalMembers = 4

  const teamMembers = [
    {
      id: 1,
      name: "Dan Freedman",
      title: "Head of Insurance",
      bio: "Dan led the development of a pioneering telematics insurance product at the UK’s Direct Line Group. Dan’s expertise in helping familiarise the insurance sector with cutting edge technology is an essential skill in building our offer.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Hossein Hadian",
      title: "Head of AI",
      bio: "Hossein studied his PhD at Johns Hopkins and is an expert in transformer AI. He's published multiple papers on the subject and delivered state-of-the-art financial LLM.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 3,
      name: "Scott Miller",
      title: "Head of Hardware",
      bio: "Scott is an electronics engineer with experience in the military equipment and automotive sectors. Scott’s ability to roadmap products from inception to certification, at pace, is seeing us form disruptive new delivery collaborations.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "ELENA RODRIGUEZ",
      title: "Chief Data Scientist",
      bio: "Elena leads our data science initiatives, transforming complex insurance data into actionable insights. Her research in predictive modeling has revolutionized how we approach risk assessment and pricing.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    },
  ]

  // Dynamically generate small profiles based on active member
  const [smallProfiles, setSmallProfiles] = useState([
    { id: 1, image: teamMembers[1].image },
    { id: 2, image: teamMembers[2].image },
    { id: 3, image: teamMembers[3].image },
  ])

  useEffect(() => {
    // Update small profiles to exclude the active member's image and cycle through others
    const currentMemberData = teamMembers.find((m) => m.id === activeMember)
    const availableMembers = teamMembers.filter((m) => m.id !== activeMember)
    const newSmallProfiles = [
      { id: 1, image: availableMembers[0].image },
      { id: 2, image: availableMembers[1].image },
      { id: 3, image: availableMembers[2].image },
    ]
    setSmallProfiles(newSmallProfiles)
  }, [activeMember])

  useEffect(() => {
    const container = containerRef.current

    // Initialize GSAP animations with ScrollTrigger
    gsap.set(container, { autoAlpha: 0 })

    ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      onEnter: () => {
        gsap.to(container, {
          duration: 1,
          autoAlpha: 1,
          ease: "power3.out",
        })

        // Animate the leadership text
        gsap.from(".leadership-title", {
          duration: 1.2,
          y: 50,
          ease: "power3.out",
          delay: 0.3,
        })

        // Animate the profile images
        gsap.from(".profile-image", {
          duration: 0.8,
          scale: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.5,
        })

        // Animate the bio text
        gsap.from(".bio-text", {
          duration: 1,
          x: -30,
          ease: "power2.out",
          delay: 0.7,
        })

        // Animate the name and title
        gsap.from(".name-title", {
          duration: 1,
          y: 20,
          ease: "power2.out",
          delay: 0.9,
        })

        // Animate social icons
        gsap.from(".social-icons a", {
          duration: 0.5,
          y: 10,
          stagger: 0.1,
          ease: "power2.out",
          delay: 1.2,
        })

        // Animate pagination
        gsap.from(".pagination button", {
          duration: 0.5,
          scale: 0,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1.4,
        })
      },
    })
  }, [])

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev < totalMembers ? prev + 1 : 1))
    }, 2000) // Change every 2 seconds
    return () => clearInterval(interval)
  }, [totalMembers])

  // Animation for changing team members (main profile, bio,name/title, and small profile images)
  useEffect(() => {
    // Animate main profile, bio, and name/title
    gsap.to([".main-profile img", ".bio-text", ".name-title"], {
      duration: 0.4,
      opacity: 0,
      y: -10,
      ease: "power2.in",
      onComplete: () => {
        gsap.to([".main-profile img", ".bio-text", ".name-title"], {
          duration: 0.6,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.1,
        })
      },
    })

    // Animate small profile images (top and bottom) with transition
    gsap.to(".profile-image img", {
      duration: 0.4,
      opacity: 0,
      y: 10,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(".profile-image img", {
          duration: 0.6,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.1,
        })
      },
    })
  }, [activeMember])

  const handlePagination = (index) => {
    setActiveMember(index)
  }

  const currentMember = teamMembers.find((member) => member.id ===
activeMember) || teamMembers[0]

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full flex items-center justify-center
text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col
md:flex-row items-center justify-between relative">
      {/* Left side - Title and Bio */}
      <div className="w-full md:w-1/2 flex flex-col items-start
justify-center z-10 px-4 md:px-8">
          <h1 className="leadership-title text-5xl md:text-7xl
font-bold tracking-wider mb-16">LEADERSHIP</h1>

          {/* Bio with border box that's attached to the image */}
          <div className="bio-container w-full mt-16 ml-8 flex justify-end">
            <div className="bio-box relative p-14 border-t border-l
border-b border-[#B94C99] text-right w-full ml-4">
              <p className="bio-text text-sm md:text-base
text-gray-300">{currentMember.bio}</p>
            </div>
          </div>
        </div>

        {/* Center - Profile Images */}
        <div className="w-full flex flex-col items-start
justify-center relative my-12 md:my-0">
          {/* Small profile image top */}
          <div className="profile-image mb-6 w-24 h-32 overflow-hidden">
            <img
              src={smallProfiles[0].image || "/placeholder.svg"}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small profile image middle-top */}
          <div className="profile-image mb-6 w-24 h-32 overflow-hidden">
            <img
              src={smallProfiles[1].image || "/placeholder.svg"}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main profile image */}
          <div className="main-profile relative mb-6">
            <div className="absolute inset-1 border-r-4 border-b-4
border-[#B94C99] transform translate-x-2 translate-y-2"></div>
            <div className="w-78 h-76 overflow-hidden">
              <img
                src={currentMember.image || "/placeholder.svg"}
                alt={currentMember.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Small profile image bottom */}
          <div className="profile-image w-24 h-32 overflow-hidden">
            <img
              src={smallProfiles[2].image || "/placeholder.svg"}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Name, Title, Social */}
        <div className="w-full md:w-2/6 flex flex-col items-start
justify-center z-10 ml-4">
          <div className="name-title mr-100 mt-56 mb-8">
            <div className="text-sm text-[#B94C99] mb-2">MEET</div>
            <h2 className="text-4xl
font-bold">{currentMember.name.split(" ")[0]}</h2>
            <h2 className="text-4xl
font-bold">{currentMember.name.split(" ")[1]}</h2>
            <div className="mt-4 text-sm
text-gray-400">{currentMember.title}</div>
          </div>

          {/* Social icons */}
          <div className="social-icons flex space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-white
transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white
transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white
transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white
transition-colors">
              <Twitter size={18} />
            </a>
          </div>

          {/* Pagination - Now below social icons */}
          <div className=" w-40 h-10 flex space-x-2 mt-4 mb-8 z-20">
            {teamMembers && teamMembers.length > 0 ? ( teamMembers.map((member) => ( <button key={member.id} onClick={() => handlePagination(member.id)} 
            className={`w-10 border ${   activeMember === member.id ? "border-[#B94C99] text-[#B94C99]" : "border-gray-700 text-gray-700" } flex items-center justify-center hover:border-[#B94C99] hover:text-[#B94C99] transition-colors`}
                >
                  {member.id || "N/A"}
                </button>
              ))
            ) : (
              <div className="text-gray-400 text-sm">No team members
to display</div>
            )}
          </div>

          {/* Vertical arrows - Now positioned to the right */}
          <div className="arrows absolute right-8 top-1/2 transform
-translate-y-1/2 flex flex-col items-center space-y-12">
            <button
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => setActiveMember((prev) => (prev > 1 ?
prev - 1 : totalMembers))}
            >
              <img
                src= {ArrowUp}
                alt="Previous member"
                className="h-8 w-2"
              />
            </button>
            <button
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => setActiveMember((prev) => (prev <
totalMembers ? prev + 1 : 1))}
            >
              <img
                src= {ArrowDown}
                alt="Next member"
                className="h-8 w-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}