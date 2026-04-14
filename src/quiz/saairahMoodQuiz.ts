import { MoodId, PersonalityQuiz } from "./types";

const results: PersonalityQuiz["results"] = {
  not_pregnant_saairah: {
    id: "not_pregnant_saairah",
    title: "Not Pregnant Saairah",
    description:
      "Every sensation is a headline. You are 80% intuition, 20% WebMD, and 100% demanding dramatic reassurance from the group chat.",
    shareText: "I got Not Pregnant Saairah — please reassure me immediately.",
    // ADD IMAGE HERE
    image: "/images/moods/not-pregnant-saairah.png",
  },
  saairah_queen: {
    id: "saairah_queen",
    title: "Saairah Queen",
    description:
      "Iconic, confident, socially dominant. You walk in and the room updates its software. Your vibe is ‘leadership’ with a side of menace.",
    shareText: "I got Saairah Queen — I didn’t choose the crown, it chose me.",
    // ADD IMAGE HERE
    image: "/images/moods/saairah-queen.png",
  },
  locked_in_saairah: {
    id: "locked_in_saairah",
    title: "Locked In Saairah",
    description:
      "Focused, productive, efficient. You love a plan, a timer, and the quiet satisfaction of doing what you said you’d do. Respectfully: don’t disturb.",
    shareText: "I got Locked In Saairah — I’m in my productive era. Don’t text me.",
    // ADD IMAGE HERE
    image: "/images/moods/locked-in-saairah.png",
  },
  low_blood_sugar_saairah: {
    id: "low_blood_sugar_saairah",
    title: "Low Blood Sugar Saairah",
    description:
      "Hungry, irritable, unstable (affectionate). You’re sweet until you aren’t, and the difference is literally one snack. Feed you for everyone’s safety.",
    shareText: "I got Low Blood Sugar Saairah — bring me food or face consequences.",
    // ADD IMAGE HERE
    image: "/images/moods/low-blood-sugar-saairah.png",
  },
  grateful_saairah: {
    id: "grateful_saairah",
    title: "Grateful Saairah",
    description:
      "Soft, sincere, affectionate. You say the nice thing out loud, you mean it, and somehow it makes everyone act like they have a heart again.",
    shareText: "I got Grateful Saairah — I love you guys and I’m not even joking.",
    // ADD IMAGE HERE
    image: "/images/moods/grateful-saairah.png",
  },
  capitalist_saairah: {
    id: "capitalist_saairah",
    title: "Capitalist Saairah",
    description:
      "Strategic, practical, value-maxing. You’re not cheap—you’re optimal. If there’s a better deal, you will find it, send the link, and feel peace.",
    shareText: "I got Capitalist Saairah — value per minute is my love language.",
    // ADD IMAGE HERE
    image: "/images/moods/capitalist-saairah.png",
  },
  thursday_night_saairah: {
    id: "thursday_night_saairah",
    title: "Thursday Night Saairah",
    description:
      "Impulsive, social, chaotic pre-weekend energy. You hear ‘one drink’ and your calendar starts buffering. You’re a plan disruptor (compliment).",
    shareText: "I got Thursday Night Saairah — it’s not even the weekend and I’m acting up.",
    // ADD IMAGE HERE
    image: "/images/moods/thursday-night-saairah.png",
  },
};

const q = (id: string) => id;
const o = (id: string) => id;

export const saairahMoodQuiz: PersonalityQuiz = {
  id: "which-saairah-mood-are-you",
  title: "Which Saairah mood are you?",
  results,
  tieBreakOrder: [
    "grateful_saairah",
    "saairah_queen",
    "locked_in_saairah",
    "capitalist_saairah",
    "thursday_night_saairah",
    "low_blood_sugar_saairah",
    "not_pregnant_saairah",
  ],
  questions: [
    {
      id: q("q1_birthday_role"),
      prompt: "It’s someone’s birthday and you’ve been assigned ‘vibes’. What’s your move?",
      options: [
        {
          id: o("q1_aura_arrival"),
          text: "Arrive late, but somehow everyone stands up like it’s a scene.",
          scores: { saairah_queen: 3, thursday_night_saairah: 1 },
        },
        {
          id: o("q1_spreadsheet_cake"),
          text: "Bring a spreadsheet of who owes who for cake. Receipts attached.",
          scores: { capitalist_saairah: 3, locked_in_saairah: 1 },
        },
        {
          id: o("q1_set_up_machine"),
          text: "Show up early, set up everything, and quietly run the whole event like a professional.",
          scores: { locked_in_saairah: 3, capitalist_saairah: 2 },
        },
        {
          id: o("q1_snack_emergency"),
          text: "Immediately ask where the snacks are. Your mood depends on it.",
          scores: { low_blood_sugar_saairah: 3, not_pregnant_saairah: 1 },
        },
        {
          id: o("q1_body_scan"),
          text: "Do a quick body scan: “Wait… is that a symptom or just… air?”",
          scores: { not_pregnant_saairah: 3, low_blood_sugar_saairah: 2 },
        },
        {
          id: o("q1_heartfelt_hugs"),
          text: "Bring a heartfelt card and start hugging people like it’s a season finale.",
          scores: { grateful_saairah: 3, saairah_queen: 1 },
        },
      ],
    },
    {
      id: q("q2_uber_towel"),
      prompt: "Your Uber is 6 minutes away and you’re still in a towel.",
      options: [
        {
          id: o("q2_speedrun"),
          text: "I will be ready in 4. Watch me become a machine.",
          scores: { locked_in_saairah: 3 },
        },
        {
          id: o("q2_cancel_optimize"),
          text: "Cancel. Rebook. Optimize ETA. Tip math already calculated.",
          scores: { capitalist_saairah: 3, locked_in_saairah: 1 },
        },
        {
          id: o("q2_main_character"),
          text: "Put on the first outfit that screams ‘main character’. The rest will resolve itself.",
          scores: { saairah_queen: 3, thursday_night_saairah: 1 },
        },
        {
          id: o("q2_text_im_outside"),
          text: "Text the group: “I’m outside” (you are not). Chaos wins.",
          scores: { thursday_night_saairah: 3, saairah_queen: 1 },
        },
        {
          id: o("q2_sudden_symptom"),
          text: "Suddenly convinced you’re nauseous. For Reasons. Need reassurance immediately.",
          scores: { not_pregnant_saairah: 3, low_blood_sugar_saairah: 1 },
        },
      ],
    },
    {
      id: q("q3_chill_plans"),
      prompt: "Someone says: “Let’s do something chill tonight.” Your definition of chill is…",
      options: [
        {
          id: o("q3_silent_todo"),
          text: "We sit in silence and I finish my to-do list. Bliss.",
          scores: { locked_in_saairah: 3 },
        },
        {
          id: o("q3_soft_pregame_saga"),
          text: "A soft pregame that ‘accidentally’ becomes three locations and a story arc.",
          scores: { thursday_night_saairah: 3, saairah_queen: 1 },
        },
        {
          id: o("q3_free_parking"),
          text: "We go somewhere with deals and free parking. I have a plan.",
          scores: { capitalist_saairah: 3, locked_in_saairah: 1 },
        },
        {
          id: o("q3_food_or_war"),
          text: "I need food in my hand or I will start a war for no reason.",
          scores: { low_blood_sugar_saairah: 3 },
        },
        {
          id: o("q3_candles_gratitude"),
          text: "Candles, cozy talk, and being weirdly sincere (in a good way).",
          scores: { grateful_saairah: 3 },
        },
        {
          id: o("q3_medical_questions"),
          text: "I’m going to ask twelve medical questions and require dramatic reassurance.",
          scores: { not_pregnant_saairah: 3, low_blood_sugar_saairah: 1 },
        },
      ],
    },
    {
      id: q("q4_group_chat"),
      prompt: "Pick a group-chat message you’d send unprompted.",
      options: [
        {
          id: o("q4_proud_of_you"),
          text: "“I’m proud of you.” (and I mean it)",
          scores: { grateful_saairah: 3 },
        },
        {
          id: o("q4_drop_location"),
          text: "“Drop location.”",
          scores: { thursday_night_saairah: 2, saairah_queen: 1 },
        },
        {
          id: o("q4_schedule_not_request"),
          text: "“This is not a request, it’s a schedule.”",
          scores: { locked_in_saairah: 2, saairah_queen: 1 },
        },
        {
          id: o("q4_better_deal_link"),
          text: "“I found a better deal. Here’s the link.”",
          scores: { capitalist_saairah: 2, locked_in_saairah: 1 },
        },
        {
          id: o("q4_shaking_forgot_to_eat"),
          text: "“I’m literally shaking (because I forgot to eat).”",
          scores: { low_blood_sugar_saairah: 2 },
        },
        {
          id: o("q4_symptom_question"),
          text: "“Do you guys think this is a symptom?”",
          scores: { not_pregnant_saairah: 2, low_blood_sugar_saairah: 1 },
        },
        {
          id: o("q4_im_the_moment"),
          text: "“I’m the moment. Be ready.”",
          scores: { saairah_queen: 3, thursday_night_saairah: 1 },
        },
      ],
    },
    {
      id: q("q5_restaurant_friend"),
      prompt: "At a restaurant, you are the friend who…",
      options: [
        {
          id: o("q5_order_for_table"),
          text: "Orders for the table like a benevolent dictator. Everyone trusts you (for reasons).",
          scores: { saairah_queen: 2, grateful_saairah: 1 },
        },
        {
          id: o("q5_extra_bread"),
          text: "Asks for extra bread because you can feel yourself becoming a different person.",
          scores: { low_blood_sugar_saairah: 3 },
        },
        {
          id: o("q5_split_bill_precision"),
          text: "Splits the bill with surgical precision and a mild lecture about fairness.",
          scores: { capitalist_saairah: 3, locked_in_saairah: 1 },
        },
        {
          id: o("q5_menu_research"),
          text: "Already researched the menu and chosen the fastest path to happiness.",
          scores: { locked_in_saairah: 3, capitalist_saairah: 1 },
        },
        {
          id: o("q5_stomach_off"),
          text: "Says “I’m fine” then quietly spirals about your stomach feeling ‘off’.",
          scores: { not_pregnant_saairah: 3, low_blood_sugar_saairah: 1 },
        },
        {
          id: o("q5_one_drink_saga"),
          text: "Starts with “one drink” and then it becomes a saga with plot twists.",
          scores: { thursday_night_saairah: 3, saairah_queen: 1 },
        },
      ],
    },
    {
      id: q("q6_canceled_plans"),
      prompt: "Your plans get canceled last minute. What happens to you emotionally?",
      options: [
        {
          id: o("q6_12_things_done"),
          text: "Perfect. I will now get 12 things done and feel slightly superior.",
          scores: { locked_in_saairah: 3 },
        },
        {
          id: o("q6_cost_saving_win"),
          text: "This is a cost-saving win. I might even return something and feel alive again.",
          scores: { capitalist_saairah: 3 },
        },
        {
          id: o("q6_hurt_but_loving"),
          text: "I’m hurt, but I’ll pretend I’m not and then I’ll still send love anyway.",
          scores: { grateful_saairah: 2, saairah_queen: 1 },
        },
        {
          id: o("q6_going_out_anyway"),
          text: "Great. I’m going out anyway. Catch me if you can.",
          scores: { thursday_night_saairah: 3 },
        },
        {
          id: o("q6_hunger_feral"),
          text: "I’m fine until I realize I haven’t eaten and then I become feral.",
          scores: { low_blood_sugar_saairah: 3 },
        },
        {
          id: o("q6_stay_home_monitor"),
          text: "Honestly? Relieved. I can stay home and monitor my body in peace.",
          scores: { not_pregnant_saairah: 3, low_blood_sugar_saairah: 1 },
        },
      ],
    },
    {
      id: q("q7_leaving_house_ritual"),
      prompt: "Choose your “I’m about to leave the house” ritual.",
      options: [
        {
          id: o("q7_keys_wallet_phone"),
          text: "Keys-wallet-phone. Quick check. Efficient. (Yes, you’re impressed.)",
          scores: { locked_in_saairah: 2, saairah_queen: 1 },
        },
        {
          id: o("q7_lipgloss_presence"),
          text: "Lip gloss. Outfit check. Presence activated. The world can cope.",
          scores: { saairah_queen: 3 },
        },
        {
          id: o("q7_best_value_route"),
          text: "Check the route, parking, and deals. I’m chasing value-per-minute.",
          scores: { capitalist_saairah: 3, locked_in_saairah: 1 },
        },
        {
          id: o("q7_snack_in_bag"),
          text: "Shove a snack in your bag like it’s life support. Just in case.",
          scores: { low_blood_sugar_saairah: 2, capitalist_saairah: 1 },
        },
        {
          id: o("q7_invite_one_more"),
          text: "Playlist on. Group selfie. Impulsive “wait let’s invite one more person.”",
          scores: { thursday_night_saairah: 3, saairah_queen: 1 },
        },
        {
          id: o("q7_google_is_it_normal"),
          text: "Google “is it normal that…” and then decide you’re fine because a friend said so.",
          scores: { not_pregnant_saairah: 3, low_blood_sugar_saairah: 1 },
        },
      ],
    },
    {
      id: q("q8_compliment_response"),
      prompt: "Someone compliments you unexpectedly. You reply:",
      options: [
        {
          id: o("q8_correct"),
          text: "“Correct.”",
          scores: { saairah_queen: 3 },
        },
        {
          id: o("q8_stop_but_thrive"),
          text: "“Stopppp.” (but you’re thriving)",
          scores: { saairah_queen: 2, thursday_night_saairah: 1 },
        },
        {
          id: o("q8_thank_you_sincerely"),
          text: "“Thank you, that’s so sweet.” (and you mean it)",
          scores: { grateful_saairah: 3 },
        },
        {
          id: o("q8_back_to_mission"),
          text: "“Nice. Now back to the mission.”",
          scores: { locked_in_saairah: 3 },
        },
        {
          id: o("q8_concerning_way"),
          text: "“Wait… do I look… different? In a concerning way?”",
          scores: { not_pregnant_saairah: 3, low_blood_sugar_saairah: 1 },
        },
        {
          id: o("q8_cheaper_link"),
          text: "“Cute. Also, did you know you can get this same thing cheaper?”",
          scores: { capitalist_saairah: 3 },
        },
        {
          id: o("q8_come_out_tonight"),
          text: "“Omg come out tonight.”",
          scores: { thursday_night_saairah: 3, saairah_queen: 1 },
        },
      ],
    },
  ],
};

export const moodTitleById: Record<MoodId, string> = Object.fromEntries(
  Object.entries(results).map(([id, result]) => [id, result.title]),
) as Record<MoodId, string>;

