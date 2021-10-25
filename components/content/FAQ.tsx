import React, { Component, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export interface FAQType {
    Q: string,
    A: Array<string>,
}
const FAQ = ({show, funcHide}) => {
  const faqData: Array<FAQType> = [{
        Q: "What is the avatar maker?",
        A: ["The Avatar Maker is an NFT tool that allows users to create their own avatar from multiple traits. Like an avatar maker in a video game."]
    },
    {
        Q: "How much does it cost?",
        A: ["Prices start at 0.03"]
    },
    {
        Q: "When will it launch?",
        A: ["November 15th"]
    },
    {
        Q: "Will my avatar be unique?",
        A: ["Every Avatar is one of a kind. Whatever combination of traits and colours that are used to create an avatar cannot be used again."]
    },
    {
        Q: "How many can I make?",
        A: ["This depends on the Power-Pass you hold. Each Power-Pass can allow a holder to create 1 or more Avatars."]
    },
    {
        Q: "What do the different passes mean?",
        A: ["Gold, Silver and Bronze Power-Passes represent the rarity level of the avatar. Each pass unlocks special traits in the Avatar Maker"]
    },
    {
        Q: "So if I have a gold shadow symbol do I get a gold avatar maker pass?",
        A: ["A Gold Shadow Symbol/Pass will give you the ability to create 3 Gold Standard Avatars in the Avatar maker; 1 for free and 2 for 0.0369. This pass will also give you access to Gold traits in the Avatar Maker."]
    },
    {
        Q: "How many traits can I pick from?",
        A: ["This depends on the Power-Pass; 7 to 11 traits"]
    },
    {
        Q: "How many shadows traits?",
        A: ["11 traits or more depending on how many symbols you have"]
    },
    {
        Q: "What slots on the avatar maker can I select from?",
        A: ["Top Accessories (staves, outer horns, top-level details that don’t fit elsewhere, etc)",
        "Neck (wings, capes, gaiters, etc)", "Cowl (ghillie netting, hats, hair, etc)", "Horn (any cool thing you can think of that would reasonably look good sticking out of a forehead)", "Whole Mask (Some masks don’t work in pieces, so this includes entire masks that negate both other mask slots)", "Mask Upper (Goggles, Captain America-style cowls, glasses, etc)", " Mask Lower (chin straps, pandemic masks, gas masks, bandanas, etc)", "Clothes", "Bottom Accessories (weapons, etc)","Backgrounds"]
    },
    {
        Q: "Will my avatar be unique?",
        A: ["Yes, each avatar is one-of-a-kind when minted."]
    },
    {
        Q: "What does the rarity look like?",
        A: ["Our official Rarity works like this:", "Bronze, Silver and Gold ranks. The highest value avatar in each rank is a “CORE” character."]
    },
    {
        Q: "What is a “CORE” Character?",
        A: ["A “CORE” Character is an Avatar with a full set of matching traits."]
    },
    {
        Q: "How many projects are using it?",
        A: ["We are launching with 8 projects but plan to add 5 new projects each month."]
    },
    {
        Q: "What value does the avatar bring?",
        A: ["The official value of our avatars/metaciples will be based on its ranking, edition and mixture of other projects traits. The more traits an avatar has from multiple projects the rarer and more unique it will be. All NFTs value derives from its popularity that's why we’re teaming with the very best projects in the space."]
    },
    {
        Q: "What utility is there?",
        A: ["The ability to create an Avatar from your favourite NFT projects.", "Different Power-Passes have different utilities."]
    },
    {
        Q: "How many passes can I purchase?",
        A: ["10 at a time."]
    },
    {
        Q: "Can I sell my pass?",
        A: ["Yes"]
    },
    {
        Q: "Are there any other projects involved?",
        A: ["Please check our Power-Pass tab."]
    },
    {
        Q: "How do I get my project in the avatar maker?",
        A: ["INFO@NFTAVATARMAKER.COM"]
    },
    {
        Q: "Can I use my NFTs that you guys have not collaborated with?",
        A: ["No, but please let us know who they are as we might be interested in a collab."]
    },
    {
        Q: "Are there any plans for the future with it?",
        A: ["Yes, we’re planning to drop 3d versions of your avatar that you will be able to take into the metaverse."]
    },
    {
        Q: "Do I get any freebies for holding? ",
        A: ["It depends on our collaborators' plans."]
    },
    {
        Q: "What perks are there?",
        A: ["The Avatar maker is a tool, not a community project. We’ve created the avatar maker as a tool to enhance already popular NFT projects."]
    }
  ];
  return (
    <div>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={show}
        width="50%"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          funcHide();
        }}
      >
        <div>
            <div className='w-full flex justify-center items-center text-3xl font-bold text-gray-800'>
                Frequently Asked Questions(FAQ)
            </div>
            {
                faqData.map((item, index) => {
                    return (
                        <div key={index} className='pt-6'>
                            <div className='border-l-4 border-red-400 bg-red-100 w-full px-2 py-3 flex justify-start items-center'>
                                <div className='text-red-700 text-3xl  flex justify-start items-center'>
                                    Q.
                                </div>
                                <div className='text-sm pl-3  flex justify-start items-center text-black '>
                                    {
                                    item.Q
                                    }
                                </div>
                                
                            </div>
                            <div className='border-l-4 border-gray-600 bg-gray-100 w-full px-2 py-3 flex justify-start items-center'>
                                <div className='text-gray-700 text-3xl  flex justify-start items-center'>
                                    A.
                                </div>
                                <div className='pl-3  flex justify-start items-center text-gray-800 text-sm'>
                                    <div>
                                        {
                                            item.A.map((a_item, a_index) => {
                                                return (
                                                    a_item.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? (
                                                        <div key={a_index}>
                                                            <a href={`mailto:${a_item}`} className='text-blue-800'>{a_item}</a>
                                                        </div>
                                                    ): (
                                                    <div key={a_index} className='pt-1 flex'>
                                                        {(item.A.length > 1) && (
                                                            <div>
                                                                {
                                                                    a_index + 1
                                                                }.
                                                            </div>
                                                        )}
                                                        <span className='pl-2'>
                                                            {
                                                                a_item
                                                            }
                                                        </span>
                                                    </div>
                                                    )
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </SlidingPane>
    </div>
  );
};
export default FAQ;