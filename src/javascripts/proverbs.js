import "bootstrap"
let proverbs = [
  {
    id: 1,
    chapter: 1,
    verse: "1-7",
    title: "The Beginning of Knowledge",
    quote: "The proverbs of Solomon, son of David, king of Israel: To know wisdom and instruction, to understand words of insight, to receive instruction in wise dealing, in righteousness, justice, and equity; to give prudence to the simple, knowledge and discretion to the youth— Let the wise hear and increase in learning, and the one who understands obtain guidance, to understand a proverb and a saying, the words of the wise and their riddles. The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction."
  },
  {
    id: 2,
    chapter: 1,
    verse: "8-19",
    title: "The Enticement of Sinners",
    quote: "Hear, my son, your father’s instruction, and forsake not your mother’s teaching, for they are a graceful garland for your head and pendants for your neck. My son, if sinners entice you, do not consent. If they say, 'Come with us, let us lie in wait for blood; let us ambush the innocent without reason; like Sheol let us swallow them alive, and whole, like those who go down to the pit; we shall find all precious goods, we shall fill our houses with plunder; throw in your lot among us; we will all have one purse'— my son, do not walk in the way with them; hold back your foot from their paths, for their feet run to evil, and they make haste to shed blood. For in vain is a net spread in the sight of any bird, but these men ulie in wait for their own blood; they set an ambush for their own lives. Such are the ways of everyone who is greedy for unjust gain; it takes away the life of its possessors."
  },
  {
    id: 3,
    chapter: 1,
    verse: "20-33",
    title: "The Call of Wisdom",
    quote: "Wisdom cries aloud in the street, in the markets she raises her voice... But whoever listens to me will dwell secure and will be at ease, without dread of disaster."
  },
  {
    id: 4,
    chapter: 2,
    verse: "1-5",
    title: "The Value of Wisdom",
    quote: "My son, if you receive my words and treasure up my commandments with you, making your ear attentive to wisdom and inclining your heart to understanding; yes, if you call out for insight and raise your voice for understanding, if you seek it like silver and search for it as for hidden treasures, then you will understand the fear of the Lord and find the knowledge of God."
  },
  {
    id: 5,
    chapter: 2,
    verse: "6-8",
    title: "The Source of Wisdom",
    quote: "For the Lord gives wisdom; from his mouth come knowledge and understanding; he stores up sound wisdom for the upright; he is a shield to those who walk in integrity, guarding the paths of justice and watching over the way of his saints."
  },
  {
    id: 6,
    chapter: 2,
    verse: "9-11",
    title: "The Rewards of Wisdom",
    quote: "Then you will understand righteousness and justice and equity, every good path; for wisdom will come into your heart, and knowledge will be pleasant to your soul; discretion will watch over you, understanding will guard you,"
  },
  {
    id: 7,
    chapter: 2,
    verse: "12-15",
    title: "Warning Against Evil Men",
    quote: "delivering you from the way of evil, from men of perverted speech, who forsake the paths of uprightness to walk in the ways of darkness, who rejoice in doing evil and delight in the perverseness of evil,"
  },
  {
    id: 8,
    chapter: 2,
    verse: "16-19",
    title: "The Forbidden Woman",
    quote: "So you will be delivered from the forbidden woman, from the adulteress with her smooth words, who forsakes the companion of her youth and forgets the covenant of her God; for her house sinks down to death, and her paths to the departed;"
  },
  {
    id: 9,
    chapter: 2,
    verse: "20-22",
    title: "The Way of Good Men",
    quote: "None who go to her come back, nor do they regain the paths of life. So you will walk in the way of the good and keep to the paths of the righteous. For the upright will inhabit the land, and those with integrity will remain in it,"
  },
  {
    id: 10,
    chapter: 3,
    verse: "1-4",
    title: "Trust in the Lord",
    quote: "My son, do not forget my teaching, but let your heart keep my commandments, for length of days and years of life and peace they will add to you. Let not steadfast love and faithfulness forsake you; bind them around your neck; write them on the tablet of your heart. So you will find favor and good success in the sight of God and man."
  },
  {
    id: 11,
    chapter: 3,
    verse: "5-6",
    title: "Trust in the Lord with All Your Heart",
    quote: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."
  },
  {
    id: 12,
    chapter: 3,
    verse: "7-8",
    title: "Fear the Lord",
    quote: "Be not wise in your own eyes; fear the Lord, and turn away from evil. It will be healing to your flesh and refreshment to your bones."
  },
  {
    id: 13,
    chapter: 3,
    verse: "9-10",
    title: "Honor the Lord with Your Wealth",
    quote: "Honor the Lord with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty, and your vats will be bursting with wine."
  },
  {
    id: 14,
    chapter: 3,
    verse: "11-12",
    title: "Do Not Despise the Lord's Discipline",
    quote: "My son, do not despise the Lord's discipline or be weary of his reproof, for the Lord reproves him whom he loves, as a father the son in whom he delights."
  },
  {
    id: 15,
    chapter: 3,
    verse: "13-18",
    title: "The Value of Wisdom",
    quote: "Blessed is the one who finds wisdom, and the one who gets understanding, for the gain from her is better than gain from silver and her profit better than gold. She is more precious than jewels, and nothing you desire can compare with her. Long life is in her right hand; in her left hand are riches and honor. Her ways are ways of pleasantness, and all her paths are peace."
  },
  {
    id: 16,
    chapter: 3,
    verse: "19-20",
    title: "The Wisdom of God's Creation",
    quote: "The Lord by wisdom founded the earth; by understanding he established the heavens; by his knowledge the deeps broke open, and the clouds drop down the dew."
  },
  {
    id: 17,
    chapter: 3,
    verse: "21-26",
    title: "Trust in the Lord with All Your Heart",
    quote: "My son, do not lose sight of these—keep sound wisdom and discretion, and they will be life for your soul and adornment for your neck. Then you will walk on your way securely, and your foot will not stumble. If you lie down, you will not be afraid; when you lie down, your sleep will be sweet. Do not be afraid of sudden terror or of the ruin of the wicked, when it comes, for the Lord will be your confidence and will keep your foot from being caught."
  },
  {
    id: 18,
    chapter: 3,
    verse: "27-31",
    title: "Do Not Withhold Good from Those Who Deserve It",
    quote: "Do not withhold good from those to whom it is due, when it is in your power to do it. Do not say to your neighbor, 'Go, and come again, tomorrow I will give it'—when you have it with you. Do not plan evil against your neighbor, who dwells trustingly beside you. Do not contend with a man for no reason, when he has done you no harm. Do not envy a man of violence and do not choose any of his ways,"
  },
  {
    id: 19,
    chapter: 3,
    verse: "32-35",
    title: "The Lord's Curse on the House of the Wicked",
    quote: "For the devious person is an abomination to the Lord, but the upright are in his confidence. The Lord's curse is on the house of the wicked, but he blesses the dwelling of the righteous. Toward the scorners he is scornful, but to the humble he gives favor. The wise will inherit honor, but fools get disgrace."
  },

  {
    id: 20,
    chapter: 4,
    verse: "1-4",
    title: "A Father's Wise Instruction",
    quote: "Hear, O sons, a father's instruction, and be attentive, that you may gain insight, for I give you good precepts; do not forsake my teaching. When I was a son with my father, tender, the only one in the sight of my mother, he taught me and said to me, 'Let your heart hold fast my words; keep my commandments, and live.'"
  },
  {
    id: 21,
    chapter: 4,
    verse: "5-9",
    title: "The Way of Wisdom",
    quote: "Get wisdom; get insight; do not forget, and do not turn away from the words of my mouth. Do not forsake her, and she will keep you; love her, and she will guard you. The beginning of wisdom is this: Get wisdom, and whatever you get, get insight. Prize her highly, and she will exalt you; she will honor you if you embrace her. She will place on your head a graceful garland; she will bestow on you a beautiful crown.'"
  },
  {
    id: 22,
    chapter: 4,
    verse: "10-13",
    title: "The Two Ways",
    quote: "Hear, my son, and accept my words, that the years of your life may be many. I have taught you the way of wisdom; I have led you in the paths of uprightness. When you walk, your step will not be hampered, and if you run, you will not stumble. Keep hold of instruction; do not let go; guard her, for she is your life."
  },
  {
    id: 23,
    chapter: 4,
    verse: "14-19",
    title: "Avoid the Way of the Wicked",
    quote: "Do not enter the path of the wicked, and do not walk in the way of the evil. Avoid it; do not go on it; turn away from it and pass on. For they cannot sleep unless they have done wrong; they are robbed of sleep unless they have made someone stumble. For they eat the bread of wickedness and drink the wine of violence. But the path of the righteous is like the light of dawn, which shines brighter and brighter until full day. The way of the wicked is like deep darkness; they do not know over what they stumble."
  },
  {
    id: 24,
    chapter: 4,
    verse: "20-27",
    title: "Keep Your Heart with All Vigilance",
    quote: "My son, be attentive to my words; incline your ear to my sayings. Let them not escape from your sight; keep them within your heart. For they are life to those who find them, and healing to all their flesh. Keep your heart with all vigilance, for from it flow the springs of life. Put away from you crooked speech, and put devious talk far from you. Let your eyes look directly forward, and your gaze be straight before you. Ponder the path of your feet; then all your ways will be sure. Do not swerve to the right or to the left; turn your foot away from evil."
  },
  {
    id: 25,
    chapter: 5,
    verse: "1-6",
    title: "Warning Against Adultery",
    quote: "My son, be attentive to my wisdom; incline your ear to my understanding, that you may keep discretion, and your lips may guard knowledge. For the lips of a forbidden woman drip honey, and her speech is smoother than oil, but in the end she is bitter as wormwood, sharp as a two-edged sword. Her feet go down to death; her steps follow the path to Sheol; she does not ponder the path of life; her ways wander, and she does not know it."
  },
  {
    id: 26,
    chapter: 5,
    verse: "7-14",
    title: "The Cost of Immorality",
    quote: "And now, O sons, listen to me, and do not depart from the words of my mouth. Keep your way far from her, and do not go near the door of her house, lest you give your honor to others and your years to the merciless, lest strangers take their fill of your strength, and your labors go to the house of a foreigner, and at the end of your life you groan, when your flesh and body are consumed,"
  },
  {
    id: 27,
    chapter: 5,
    verse: "15-20",
    title: "The Blessings of Faithfulness",
    quote: "Drink water from your own cistern, flowing water from your own well. Should your springs be scattered abroad, streams of water in the streets? Let them be for yourself alone, and not for strangers with you. Let your fountain be blessed, and rejoice in the wife of your youth, a lovely deer, a graceful doe. Let her breasts fill you at all times with delight; be intoxicated always in her love."
  },
  {
    id: 28,
    chapter: 5,
    verse: "21-23",
    title: "The Ways of Man Before the Lord's Eyes",
    quote: "Why should you be intoxicated, my son, with a forbidden woman and embrace the bosom of an adulteress? For a man's ways are before the eyes of the Lord, and he ponders all his paths. The iniquities of the wicked ensnare him, and he is held fast in the cords of his sin."
  },
  {
    id: 29,
    chapter: 6,
    verse: "1-5",
    title: "Warning Against Putting Up Security",
    quote: "My son, if you have put up security for your neighbor, have given your pledge for a stranger, if you are snared in the words of your mouth, caught in the words of your mouth, then do this, my son, and save yourself, for you have come into the hand of your neighbor: go, hasten, and plead urgently with your neighbor. Give your eyes no sleep and your eyelids no slumber; save yourself like a gazelle from the hand of the hunter, like a bird from the hand of the fowler."
  },
  {
    id: 30,
    chapter: 6,
    verse: "6-11",
    title: "Warning Against Laziness",
    quote: "Go to the ant, O sluggard; consider her ways, and be wise. Without having any chief, officer, or ruler, she prepares her bread in summer and gathers her food in harvest. How long will you lie there, O sluggard? When will you arise from your sleep? A little sleep, a little slumber, a little folding of the hands to rest, and poverty will come upon you like a robber, and want like an armed man."
  },
  {
    id: 31,
    chapter: 6,
    verse: "12-15",
    title: "Warning Against Wickedness",
    quote: "A worthless person, a wicked man, goes about with crooked speech, winks with his eyes, signals with his feet, points with his finger, with perverted heart devises evil, continually sowing discord; therefore calamity will come upon him suddenly; in a moment he will be broken beyond healing."
  },
  {
    id: 32,
    chapter: 6,
    verse: "16-19",
    title: "Things the Lord Hates",
    quote: "There are six things that the Lord hates, seven that are an abomination to him: haughty eyes, a lying tongue, and hands that shed innocent blood, a heart that devises wicked plans, feet that make haste to run to evil, a false witness who breathes out lies, and one who sows discord among brothers."
  },
  {
    id: 33,
    chapter: 6,
    verse: "20-23",
    title: "Fatherly Advice",
    quote: "My son, keep your father's commandment, and forsake not your mother's teaching. Bind them on your heart always; tie them around your neck. When you walk, they will lead you; when you lie down, they will watch over you; and when you awake, they will talk with you. For the commandment is a lamp and the teaching a light, and the reproofs of discipline are the way of life,"
  },
  {
    id: 34,
    chapter: 6,
    verse: "24-35",
    title: "Warning Against Adultery",
    quote: "to preserve you from the evil woman, from the smooth tongue of the adulteress. Do not desire her beauty in your heart, and do not let her capture you with her eyelashes; for the price of a prostitute is only a loaf of bread, but a married woman hunts down a precious life. Can a man carry fire next to his chest and his clothes not be burned? Or can one walk on hot coals and his feet not be scorched? So is he who goes in to his neighbor's wife; none who touches her will go unpunished."
  },
  {
    id: 35,
    chapter: 7,
    verse: "1-5",
    title: "Warning Against the Adulteress",
    quote: "My son, keep my words and treasure up my commandments with you; keep my commandments and live; keep my teaching as the apple of your eye; bind them on your fingers; write them on the tablet of your heart. Say to wisdom, 'You are my sister,' and call insight your intimate friend, to keep you from the forbidden woman, from the adulteress with her smooth words."
  },
  {
    id: 36,
    chapter: 7,
    verse: "6-9",
    title: "The Seduction of the Adulteress",
    quote: "For at the window of my house I have looked out through my lattice, and I have seen among the simple, I have perceived among the youths, a young man lacking sense, passing along the street near her corner, taking the road to her house in the twilight, in the evening, at the time of night and darkness."
  },
  {
    id: 37,
    chapter: 7,
    verse: "10-20",
    title: "The Encounter with the Adulteress",
    quote: "And behold, the woman meets him, dressed as a prostitute, wily of heart. She is loud and wayward; her feet do not stay at home; now in the street, now in the market, and at every corner she lies in wait. She seizes him and kisses him, and with bold face she says to him: 'I had to offer sacrifices, and today I have paid my vows; so now I have come out to meet you, to seek you eagerly, and I have found you.'"
  },
  {
    id: 38,
    chapter: 7,
    verse: "21-23",
    title: "The Adulteress' Seductive Words",
    quote: "I have spread my couch with coverings, colored linens from Egyptian linen; I have perfumed my bed with myrrh, aloes, and cinnamon. Come, let us take our fill of love till morning; let us delight ourselves with love."
  },
  {
    id: 39,
    chapter: 7,
    verse: "24-27",
    title: "The Consequences of Adultery",
    quote: "For my husband is not at home; he has gone on a long journey; he took a bag of money with him; at full moon he will come home.' With much seductive speech she persuades him; with her smooth talk she compels him. All at once he follows her, as an ox goes to the slaughter, or as a stag is caught fast till an arrow pierces its liver; as a bird rushes into a snare; he does not know that it will cost him his life."
  },
  {
    id: 40,
    chapter: 8,
    verse: "1-11",
    title: "The Call of Wisdom",
    quote: "Does not wisdom call? Does not understanding raise her voice? On the heights beside the way, at the crossroads she takes her stand; beside the gates in front of the town, at the entrance of the portals she cries aloud: 'To you, O men, I call, and my cry is to the children of man. O simple ones, learn prudence; O fools, learn sense. Hear, for I will speak noble things, and from my lips will come what is right, for my mouth will utter truth; wickedness is an abomination to my lips. All the words of my mouth are righteous; there is nothing twisted or crooked in them. They are all straight to him who understands, and right to those who find knowledge. Take my instruction instead of silver, and knowledge rather than choice gold, for wisdom is better than jewels, and all that you may desire cannot compare with her.'"
  },
  {
    id: 41,
    chapter: 8,
    verse: "12-21",
    title: "The Value of Wisdom",
    quote: "'I, wisdom, dwell with prudence, and I find knowledge and discretion. The fear of the Lord is hatred of evil. Pride and arrogance and the way of evil and perverted speech I hate. I have counsel and sound wisdom; I have insight; I have strength. By me kings reign, and rulers decree what is just; by me princes rule, and nobles, all who govern justly. I love those who love me, and those who seek me diligently find me. Riches and honor are with me, enduring wealth and righteousness. My fruit is better than gold, even fine gold, and my yield than choice silver. I walk in the way of righteousness, in the paths of justice, granting an inheritance to those who love me, and filling their treasuries.'"
  },
  {
    id: 42,
    chapter: 8,
    verse: "22-31",
    title: "The Excellence of Wisdom",
    quote: "'The Lord possessed me at the beginning of his work, the first of his acts of old. Ages ago I was set up, at the first, before the beginning of the earth. When there were no depths I was brought forth, when there were no springs abounding with water. Before the mountains had been shaped, before the hills, I was brought forth, before he had made the earth with its fields, or the first of the dust of the world. When he established the heavens, I was there; when he drew a circle on the face of the deep, when he made firm the skies above, when he established the fountains of the deep, when he assigned to the sea its limit, so that the waters might not transgress his command, when he marked out the foundations of the earth, then I was beside him, like a master workman, and I was daily his delight, rejoicing before him always, rejoicing in his inhabited world and delighting in the children of man.'"
  },
  {
    id: 43,
    chapter: 8,
    verse: "32-36",
    title: "Blessed is the One Who Listens to Wisdom",
    quote: "'And now, O sons, listen to me: blessed are those who keep my ways. Hear instruction and be wise, and do not neglect it. Blessed is the one who listens to me, watching daily at my gates, waiting beside my doors. For whoever finds me finds life and obtains favor from the Lord, but he who fails to find me injures himself; all who hate me love death.'"
  },
  {
    id: 44,
    chapter: 9,
    verse: "1-6",
    title: "The Way of Wisdom and the Way of Folly",
    quote: "Wisdom has built her house; she has hewn her seven pillars. She has slaughtered her beasts; she has mixed her wine; she has also set her table. She has sent out her young women to call from the highest places in the town, 'Whoever is simple, let him turn in here!' To him who lacks sense she says, 'Come, eat of my bread and drink of the wine I have mixed. Leave your simple ways, and live, and walk in the way of insight.'"
  },
  {
    id: 45,
    chapter: 9,
    verse: "7-12",
    title: "The Way of Folly",
    quote: "'Whoever corrects a scoffer gets himself abuse, and he who reproves a wicked man incurs injury. Do not reprove a scoffer, or he will hate you; reprove a wise man, and he will love you. Give instruction to a wise man, and he will be still wiser; teach a righteous man, and he will increase in learning. The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is insight. For by me your days will be multiplied, and years will be added to your life. If you are wise, you are wise for yourself; if you scoff, you alone will bear it.'"
  },
  {
    id: 46,
    chapter: 10,
    verse: "1-5",
    title: "Proverbs of Solomon",
    quote: "The proverbs of Solomon. A wise son makes a glad father, but a foolish son is a sorrow to his mother. Treasures gained by wickedness do not profit, but righteousness delivers from death. The Lord does not let the righteous go hungry, but he thwarts the craving of the wicked. A slack hand causes poverty, but the hand of the diligent makes rich. He who gathers in summer is a prudent son, but he who sleeps in harvest is a son who brings shame."
  },
  {
    id: 47,
    chapter: 10,
    verse: "6-10",
    title: "More Proverbs of Solomon",
    quote: "Blessings are on the head of the righteous, but the mouth of the wicked conceals violence. The memory of the righteous is a blessing, but the name of the wicked will rot. The wise of heart will receive commandments, but a babbling fool will come to ruin. Whoever walks in integrity walks securely, but he who makes his ways crooked will be found out. Whoever winks the eye causes trouble, but a babbling fool will come to ruin."
  },
  {
    id: 48,
    chapter: 10,
    verse: "11-15",
    title: "More Proverbs of Solomon",
    quote: "The mouth of the righteous is a fountain of life, but the mouth of the wicked conceals violence. Hatred stirs up strife, but love covers all offenses. On the lips of him who has understanding, wisdom is found, but a rod is for the back of him who lacks sense. The wise lay up knowledge, but the mouth of a fool brings ruin near. A rich man's wealth is his strong city; the poverty of the poor is their ruin."
  },
  {
    id: 49,
    chapter: 10,
    verse: "16-21",
    title: "More Proverbs of Solomon",
    quote: "The wage of the righteous leads to life, the gain of the wicked to sin. Whoever heeds instruction is on the path to life, but he who rejects reproof leads others astray. The one who conceals hatred has lying lips, and whoever utters slander is a fool. When words are many, transgression is not lacking, but whoever restrains his lips is prudent. The tongue of the righteous is choice silver; the heart of the wicked is of little worth. The lips of the righteous feed many, but fools die for lack of sense."
  },
  {
    id: 50,
    chapter: 10,
    verse: "22-25",
    title: "More Proverbs of Solomon",
    quote: "The blessing of the Lord makes rich, and he adds no sorrow with it. Doing wrong is like a joke to a fool, but wisdom is pleasure to a man of understanding. What the wicked dreads will come upon him, but the desire of the righteous will be granted. When the tempest passes, the wicked is no more, but the righteous is established forever."
  },
  {
    id: 51,
    chapter: 10,
    verse: "26-32",
    title: "More Proverbs of Solomon",
    quote: "Like vinegar to the teeth and smoke to the eyes, so is the sluggard to those who send him. The fear of the Lord prolongs life, but the years of the wicked will be short. The hope of the righteous brings joy, but the expectation of the wicked will perish. The way of the Lord is a stronghold to the blameless, but destruction to evildoers. The righteous will never be removed, but the wicked will not dwell in the land. The mouth of the righteous brings forth wisdom, but the perverse tongue will be cut off. The lips of the righteous know what is acceptable, but the mouth of the wicked, what is perverse."
  },
  {
    id: 52,
    chapter: 11,
    verse: "1-4",
    title: "Dishonesty and Integrity",
    quote: "A false balance is an abomination to the Lord, but a just weight is his delight. When pride comes, then comes disgrace, but with the humble is wisdom. The integrity of the upright guides them, but the crookedness of the treacherous destroys them. Riches do not profit in the day of wrath, but righteousness delivers from death."
  },
  {
    id: 53,
    chapter: 11,
    verse: "5-8",
    title: "Righteousness and Wickedness",
    quote: "The righteousness of the blameless keeps his way straight, but the wicked falls by his own wickedness. The righteousness of the upright delivers them, but the treacherous are taken captive by their lust. When the wicked dies, his hope will perish, and the expectation of wealth perishes too. The righteous is delivered from trouble, and the wicked walks into it instead."
  },
  {
    id: 54,
    chapter: 11,
    verse: "9-11",
    title: "Gossip and Integrity",
    quote: "With his mouth the godless man would destroy his neighbor, but by knowledge the righteous are delivered. When it goes well with the righteous, the city rejoices, and when the wicked perish there are shouts of gladness. By the blessing of the upright a city is exalted, but by the mouth of the wicked it is overthrown."
  },
  {
    id: 55,
    chapter: 11,
    verse: "12-15",
    title: "Wisdom and Foolishness",
    quote: "Whoever belittles his neighbor lacks sense, but a man of understanding remains silent. Whoever goes about slandering reveals secrets, but he who is trustworthy in spirit keeps a thing covered. Where there is no guidance, a people falls, but in an abundance of counselors there is safety. Whoever puts up security for a stranger will surely suffer harm, but he who hates striking hands in pledge is secure."
  },
  {
    id: 56,
    chapter: 11,
    verse: "16-19",
    title: "A Generous Heart",
    quote: "A gracious woman gets honor, and violent men get riches. A man who is kind benefits himself, but a cruel man hurts himself. The wicked earns deceptive wages, but one who sows righteousness gets a sure reward. Whoever is steadfast in righteousness will live, but he who pursues evil will die."
  },
  {
    id: 57,
    chapter: 11,
    verse: "20-23",
    title: "The Lord's Abhorrence of the Wicked",
    quote: "Those of crooked heart are an abomination to the Lord, but those of blameless ways are his delight. Be assured, an evil person will not go unpunished, but the offspring of the righteous will be delivered. Like a gold ring in a pig's snout is a beautiful woman without discretion. The desire of the righteous ends only in good, the expectation of the wicked in wrath."
  },
  {
    id: 58,
    chapter: 11,
    verse: "24-28",
    title: "The Generosity of the Righteous",
    quote: "One gives freely, yet grows all the richer; another withholds what he should give, and only suffers want. Whoever brings blessing will be enriched, and one who waters will himself be watered. The people curse him who holds back grain, but a blessing is on the head of him who sells it. Whoever diligently seeks good seeks favor, but evil comes to him who searches for it. Whoever trusts in his riches will fall, but the righteous will flourish like a green leaf."
  },
  {
    id: 59,
    chapter: 11,
    verse: "29-31",
    title: "Wisdom and Prosperity",
    quote: "Whoever troubles his own household will inherit the wind, and the fool will be servant to the wise of heart. The fruit of the righteous is a tree of life, and whoever captures souls is wise. If the righteous is repaid on earth, how much more the wicked and the sinner!"
  },
  {
    id: 60,
    chapter: 12,
    verse: "1-4",
    title: "Whoever Loves Discipline",
    quote: "Whoever loves discipline loves knowledge, but he who hates reproof is stupid. A good man obtains favor from the Lord, but a man of evil devices he condemns. No one is established by wickedness, but the root of the righteous will never be moved. An excellent wife is the crown of her husband, but she who brings shame is like rottenness in his bones."
  },
  {
    id: 61,
    chapter: 12,
    verse: "5-8",
    title: "Righteousness and Wickedness",
    quote: "The thoughts of the righteous are just; the counsels of the wicked are deceitful. The words of the wicked lie in wait for blood, but the mouth of the upright delivers them. The wicked are overthrown and are no more, but the house of the righteous will stand. A man is commended according to his good sense, but one of twisted mind is despised."
  },
  {
    id: 62,
    chapter: 12,
    verse: "9-12",
    title: "A Laborer's Appetite",
    quote: "Better to be lowly and have a servant than to play the great man and lack bread. Whoever is righteous has regard for the life of his beast, but the mercy of the wicked is cruel. Whoever works his land will have plenty of bread, but he who follows worthless pursuits lacks sense. Whoever is wicked covets the spoil of evildoers, but the root of the righteous bears fruit."
  },
  {
    id: 63,
    chapter: 12,
    verse: "13-16",
    title: "The Wicked and the Righteous",
    quote: "The evil man is ensnared by the transgression of his lips, but the righteous escapes from trouble. From the fruit of his mouth a man is satisfied with good, and the work of a man's hand comes back to him. The way of a fool is right in his own eyes, but a wise man listens to advice. The vexation of a fool is known at once, but the prudent ignores an insult."
  },
  {
    id: 64,
    chapter: 12,
    verse: "17-20",
    title: "Truthful Lips",
    quote: "Whoever speaks the truth gives honest evidence, but a false witness utters deceit. There is one whose rash words are like sword thrusts, but the tongue of the wise brings healing. Truthful lips endure forever, but a lying tongue is but for a moment. Deceit is in the heart of those who devise evil, but those who plan peace have joy."
  },
  {
    id: 65,
    chapter: 12,
    verse: "21-24",
    title: "Diligence and Prosperity",
    quote: "No ill befalls the righteous, but the wicked are filled with trouble. Lying lips are an abomination to the Lord, but those who act faithfully are his delight. A prudent man conceals knowledge, but the heart of fools proclaims folly. The hand of the diligent will rule, while the slothful will be put to forced labor."
  },
  {
    id: 66,
    chapter: 12,
    verse: "25-28",
    title: "Anxiety and Cheerfulness",
    quote: "Anxiety in a man's heart weighs him down, but a good word makes him glad. One who is righteous is a guide to his neighbor, but the way of the wicked leads them astray. Whoever is slothful will not roast his game, but the diligent man will get precious wealth. In the path of righteousness is life, and in its pathway there is no death."
  },
  {
    id: 67,
    chapter: 13,
    verse: "1-5",
    title: "A Wise Son and a Foolish Son",
    quote: "A wise son hears his father's instruction, but a scoffer does not listen to rebuke. From the fruit of his mouth a man eats what is good, but the desire of the treacherous is for violence. Whoever guards his mouth preserves his life; he who opens wide his lips comes to ruin. The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied. The righteous hates falsehood, but the wicked brings shame and disgrace."
  },
  {
    id: 68,
    chapter: 13,
    verse: "6-9",
    title: "Righteousness and Wealth",
    quote: "Righteousness guards him whose way is blameless, but sin overthrows the wicked. One pretends to be rich, yet has nothing; another pretends to be poor, yet has great wealth. The ransom of a man's life is his wealth, but a poor man hears no threat. The light of the righteous rejoices, but the lamp of the wicked will be put out."
  },
  {
    id: 69,
    chapter: 13,
    verse: "10-14",
    title: "Wisdom and Discipline",
    quote: "By insolence comes nothing but strife, but with those who take advice is wisdom. Wealth gained hastily will dwindle, but whoever gathers little by little will increase it. Hope deferred makes the heart sick, but a desire fulfilled is a tree of life. Whoever despises the word brings destruction on himself, but he who reveres the commandment will be rewarded. The teaching of the wise is a fountain of life, that one may turn away from the snares of death."
  },
  {
    id: 70,
    chapter: 13,
    verse: "15-19",
    title: "Understanding and Poverty",
    quote: "Good sense wins favor, but the way of the treacherous is their ruin. In everything the prudent acts with knowledge, but a fool flaunts his folly. A wicked messenger falls into trouble, but a faithful envoy brings healing. Poverty and disgrace come to him who ignores instruction, but whoever heeds reproof is honored. A desire fulfilled is sweet to the soul, but to turn away from evil is an abomination to fools."
  },
  {
    id: 71,
    chapter: 13,
    verse: "20-25",
    title: "The Companion of Fools",
    quote: "Whoever walks with the wise becomes wise, but the companion of fools will suffer harm. Disaster pursues sinners, but the righteous are rewarded with good. A good man leaves an inheritance to his children's children, but the sinner's wealth is laid up for the righteous. The fallow ground of the poor would yield much food, but it is swept away through injustice. Whoever spares the rod hates his son, but he who loves him is diligent to discipline him."
  },
  {
    id: 72,
    chapter: 13,
    verse: "26-25",
    title: "The Righteous and the Wicked",
    quote: "The righteous has enough to satisfy his appetite, but the belly of the wicked suffers want."
  },
  {
    id: 73,
    chapter: 14,
    verse: "1-4",
    title: "The Wise and the Foolish",
    quote: "The wisest of women builds her house, but folly with her own hands tears it down. Whoever walks in uprightness fears the Lord, but he who is devious in his ways despises him. By the mouth of a fool comes a rod for his back, but the lips of the wise will preserve them. Where there are no oxen, the manger is clean, but abundant crops come by the strength of the ox."
  },
  {
    id: 74,
    chapter: 14,
    verse: "5-8",
    title: "The Faithful Witness",
    quote: "A faithful witness does not lie, but a false witness breathes out lies. A scoffer seeks wisdom in vain, but knowledge is easy for a man of understanding. Leave the presence of a fool, for there you do not meet words of knowledge. The wisdom of the prudent is to discern his way, but the folly of fools is deceiving."
  },
  {
    id: 75,
    chapter: 14,
    verse: "9-12",
    title: "The Fool and the Wise",
    quote: "Fools mock at the guilt offering, but the upright enjoy acceptance. The heart knows its own bitterness, and no stranger shares its joy. The house of the wicked will be destroyed, but the tent of the upright will flourish. There is a way that seems right to a man, but its end is the way to death."
  },
  {
    id: 76,
    chapter: 14,
    verse: "13-17",
    title: "Wisdom and Foolishness",
    quote: "Even in laughter the heart may ache, and the end of joy may be grief. The backslider in heart will be filled with the fruit of his ways, and a good man will be filled with the fruit of his ways. The simple believes everything, but the prudent gives thought to his steps. One who is wise is cautious and turns away from evil, but a fool is reckless and careless."
  },
  {
    id: 77,
    chapter: 14,
    verse: "18-21",
    title: "The Poor and the Rich",
    quote: "A simple man believes everything, but the prudent gives thought to his steps. One who is wise is cautious and turns away from evil, but a fool is reckless and careless. A poor man is disliked even by his neighbor, but the rich has many friends. Whoever despises his neighbor is a sinner, but blessed is he who is generous to the poor."
  },
  {
    id: 78,
    chapter: 14,
    verse: "22-26",
    title: "Inheritance and Prosperity",
    quote: "Do they not go astray who devise evil? Those who devise good meet steadfast love and faithfulness. In all toil there is profit, but mere talk tends only to poverty. The crown of the wise is their wealth, but the folly of fools brings folly. A truthful witness saves lives, but one who breathes out lies is deceitful. In the fear of the Lord one has strong confidence, and his children will have a refuge."
  },
  {
    id: 79,
    chapter: 14,
    verse: "27-31",
    title: "The Fear of the Lord",
    quote: "The fear of the Lord is a fountain of life, that one may turn away from the snares of death. In a multitude of people is the glory of a king, but without people a prince is ruined. Whoever is slow to anger has great understanding, but he who has a hasty temper exalts folly. A tranquil heart gives life to the flesh, but envy makes the bones rot. Whoever oppresses a poor man insults his Maker, but he who is generous to the needy honors him."
  },
  {
    id: 80,
    chapter: 14,
    verse: "32-35",
    title: "Wisdom and Folly",
    quote: "The wicked is overthrown through his evildoing, but the righteous finds refuge in his death. Wisdom rests in the heart of a man of understanding, but it makes itself known even in the midst of fools. Righteousness exalts a nation, but sin is a reproach to any people. A servant who deals wisely has the king's favor, but his wrath falls on one who acts shamefully."
  },
  {
    id: 81,
    chapter: 15,
    verse: "1-4",
    title: "A Gentle Answer Turns Away Wrath",
    quote: "A soft answer turns away wrath, but a harsh word stirs up anger. The tongue of the wise commends knowledge, but the mouths of fools pour out folly. The eyes of the Lord are in every place, keeping watch on the evil and the good. A gentle tongue is a tree of life, but perverseness in it breaks the spirit."
  },
  {
    id: 82,
    chapter: 15,
    verse: "5-8",
    title: "The Lord's Abhorrence of the Wicked",
    quote: "A fool despises his father's instruction, but whoever heeds reproof is prudent. In the house of the righteous there is much treasure, but trouble befalls the income of the wicked. The lips of the wise spread knowledge; not so the hearts of fools. The sacrifice of the wicked is an abomination to the Lord, but the prayer of the upright is acceptable to him."
  },
  {
    id: 83,
    chapter: 15,
    verse: "9-12",
    title: "The Path of Life",
    quote: "The way of the wicked is an abomination to the Lord, but he loves him who pursues righteousness. There is severe discipline for him who forsakes the way; whoever hates reproof will die. Sheol and Abaddon lie open before the Lord; how much more the hearts of the children of man! A scoffer does not like to be reproved; he will not go to the wise."
  },
  {
    id: 84,
    chapter: 15,
    verse: "13-16",
    title: "The Lord's Delight",
    quote: "A glad heart makes a cheerful face, but by sorrow of heart the spirit is crushed. The heart of him who has understanding seeks knowledge, but the mouths of fools feed on folly. All the days of the afflicted are evil, but the cheerful of heart has a continual feast. Better is a little with the fear of the Lord than great treasure and trouble with it."
  },
  {
    id: 85,
    chapter: 15,
    verse: "17-20",
    title: "Wisdom and Folly",
    quote: "Better is a dinner of herbs where love is than a fattened ox and hatred with it. A hot-tempered man stirs up strife, but he who is slow to anger quiets contention. The way of a sluggard is like a hedge of thorns, but the path of the upright is a level highway. A wise son makes a glad father, but a foolish man despises his mother."
  },
  {
    id: 86,
    chapter: 15,
    verse: "21-24",
    title: "The Lord's Way",
    quote: "Folly is a joy to him who lacks sense, but a man of understanding walks straight ahead. Without counsel plans fail, but with many advisers they succeed. To make an apt answer is a joy to a man, and a word in season, how good it is! The path of life leads upward for the prudent, that he may turn away from Sheol beneath."
  },
  {
    id: 87,
    chapter: 15,
    verse: "25-28",
    title: "The Lord's Abomination",
    quote: "The Lord tears down the house of the proud but maintains the widow's boundaries. The thoughts of the wicked are an abomination to the Lord, but gracious words are pure. Whoever is greedy for unjust gain troubles his own household, but he who hates bribes will live. The heart of the righteous ponders how to answer, but the mouth of the wicked pours out evil things."
  },
  {
    id: 88,
    chapter: 15,
    verse: "29-33",
    title: "The Fear of the Lord",
    quote: "The Lord is far from the wicked, but he hears the prayer of the righteous. The light of the eyes rejoices the heart, and good news refreshes the bones. The ear that listens to life-giving reproof will dwell among the wise. Whoever ignores instruction despises himself, but he who listens to reproof gains intelligence. The fear of the Lord is instruction in wisdom, and humility comes before honor."
  },
  {
    id: 89,
    chapter: 16,
    verse: "1-4",
    title: "The Plans of the Heart",
    quote: "The plans of the heart belong to man, but the answer of the tongue is from the Lord. All the ways of a man are pure in his own eyes, but the Lord weighs the spirit. Commit your work to the Lord, and your plans will be established. The Lord has made everything for its purpose, even the wicked for the day of trouble."
  },
  {
    id: 90,
    chapter: 16,
    verse: "5-8",
    title: "Pride and Humility",
    quote: "Everyone who is arrogant in heart is an abomination to the Lord; be assured, he will not go unpunished. By steadfast love and faithfulness iniquity is atoned for, and by the fear of the Lord one turns away from evil. When a man's ways please the Lord, he makes even his enemies to be at peace with him. Better is a little with righteousness than great revenues with injustice."
  },
  {
    id: 91,
    chapter: 16,
    verse: "9-12",
    title: "The Lord's Judgments",
    quote: "The heart of man plans his way, but the Lord establishes his steps. An oracle is on the lips of a king; his mouth does not sin in judgment. A just balance and scales are the Lord's; all the weights in the bag are his work. It is an abomination to kings to do evil, for the throne is established by righteousness."
  },
  {
    id: 92,
    chapter: 16,
    verse: "13-16",
    title: "Wisdom and Understanding",
    quote: "Righteous lips are the delight of a king, and he loves him who speaks what is right. A king's wrath is a messenger of death, and a wise man will appease it. In the light of a king's face there is life, and his favor is like the clouds that bring the spring rain. How much better to get wisdom than gold! To get understanding is to be chosen rather than silver."
  },
  {
    id: 93,
    chapter: 16,
    verse: "17-20",
    title: "The Highway of the Upright",
    quote: "The highway of the upright turns aside from evil; whoever guards his way preserves his life. Pride goes before destruction, and a haughty spirit before a fall. It is better to be of a lowly spirit with the poor than to divide the spoil with the proud. Whoever gives thought to the word will discover good, and blessed is he who trusts in the Lord."
  },
  {
    id: 94,
    chapter: 16,
    verse: "21-24",
    title: "The Wise in Heart",
    quote: "The wise of heart is called discerning, and sweetness of speech increases persuasiveness. Good sense is a fountain of life to him who has it, but the instruction of fools is folly. The heart of the wise makes his speech judicious and adds persuasiveness to his lips."
  },
  {
    id: 95,
    chapter: 16,
    verse: "25-28",
    title: "The Paths of Life and Death",
    quote: "There is a way that seems right to a man, but its end is the way to death. A worker's appetite works for him; his mouth urges him on. A worthless man plots evil, and his speech is like a scorching fire. A dishonest man spreads strife, and a whisperer separates close friends."
  },
  {
    id: 96,
    chapter: 16,
    verse: "29-33",
    title: "The Humble and the Proud",
    quote: "A man of violence entices his neighbor and leads him in a way that is not good. Whoever winks his eyes plans dishonest things; he who purses his lips brings evil to pass. Gray hair is a crown of glory; it is gained in a righteous life. Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city."
  },
  {
    id: 97,
    chapter: 17,
    verse: "1-5",
    title: "Better a Dry Morsel with Quietness",
    quote: "Better is a dry morsel with quiet than a house full of feasting with strife. A servant who deals wisely will rule over a son who acts shamefully and will share the inheritance as one of the brothers. The crucible is for silver, and the furnace is for gold, and the Lord tests hearts. An evildoer listens to wicked lips, and a liar gives ear to a mischievous tongue. Whoever mocks the poor insults his Maker; he who is glad at calamity will not go unpunished."
  },
  {
    id: 98,
    chapter: 17,
    verse: "6-10",
    title: "Grandchildren Are the Crown of the Aged",
    quote: "Grandchildren are the crown of the aged, and the glory of children is their fathers. Fine speech is not becoming to a fool; still less is false speech to a prince. A bribe is like a magic stone in the eyes of the one who gives it; wherever he turns he prospers. Whoever covers an offense seeks love, but he who repeats a matter separates close friends. A rebuke goes deeper into a man of understanding than a hundred blows into a fool."
  },
  {
    id: 99,
    chapter: 17,
    verse: "11-15",
    title: "The Beginning of Strife",
    quote: "An evil man seeks only rebellion, and a cruel messenger will be sent against him. Let a man meet a she-bear robbed of her cubs rather than a fool in his folly. If anyone returns evil for good, evil will not depart from his house. The beginning of strife is like letting out water, so quit before the quarrel breaks out. He who justifies the wicked and he who condemns the righteous are both alike an abomination to the Lord."
  },
  {
    id: 100,
    chapter: 17,
    verse: "16-20",
    title: "The Deceitful Heart",
    quote: "Why should a fool have money in his hand to buy wisdom when he has no sense? A friend loves at all times, and a brother is born for adversity. One who lacks sense gives a pledge and puts up security in the presence of his neighbor. Whoever loves transgression loves strife; he who makes his door high seeks destruction. A man of crooked heart does not discover good, and one with a dishonest tongue falls into calamity."
  },
  {
    id: 101,
    chapter: 17,
    verse: "21-25",
    title: "A Fool's Joy",
    quote: "He who sires a fool gets himself sorrow, and the father of a fool has no joy. A joyful heart is good medicine, but a crushed spirit dries up the bones. The wicked accepts a bribe in secret to pervert the ways of justice. The discerning sets his face toward wisdom, but the eyes of a fool are on the ends of the earth. A foolish son is a grief to his father and bitterness to her who bore him."
  },
  {
    id: 102,
    chapter: 17,
    verse: "26-28",
    title: "Silent Wisdom",
    quote: "To impose a fine on a righteous man is not good, nor to strike the noble for their uprightness. Whoever restrains his words has knowledge, and he who has a cool spirit is a man of understanding. Even a fool who keeps silent is considered wise; when he closes his lips, he is deemed intelligent."
  },
  {
    id: 103,
    chapter: 18,
    verse: "1-6",
    title: "The Selfishness of Fools",
    quote: "Whoever isolates himself seeks his own desire; he breaks out against all sound judgment. A fool takes no pleasure in understanding, but only in expressing his opinion. When wickedness comes, contempt comes also, and with dishonor comes disgrace. The words of a man's mouth are deep waters; the fountain of wisdom is a bubbling brook. It is not good to be partial to the wicked or to deprive the righteous of justice. A fool's lips walk into a fight, and his mouth invites a beating."
  },
  {
    id: 104,
    chapter: 18,
    verse: "7-11",
    title: "The Power of the Tongue",
    quote: "A fool's mouth is his ruin, and his lips are a snare to his soul. The words of a whisperer are like delicious morsels; they go down into the inner parts of the body. Whoever is slack in his work is a brother to him who destroys. The name of the Lord is a strong tower; the righteous man runs into it and is safe. A rich man's wealth is his strong city, and like a high wall in his imagination."
  },
  {
    id: 105,
    chapter: 18,
    verse: "12-17",
    title: "Seeking Knowledge and Friendship",
    quote: "Before destruction a man's heart is haughty, but humility comes before honor. If one gives an answer before he hears, it is his folly and shame. A man's spirit will endure sickness, but a crushed spirit who can bear? An intelligent heart acquires knowledge, and the ear of the wise seeks knowledge. A man's gift makes room for him and brings him before the great."
  },
  {
    id: 106,
    chapter: 18,
    verse: "18-21",
    title: "The Power of Speech",
    quote: "A brother offended is more unyielding than a strong city, and quarreling is like the bars of a castle. From the fruit of a man's mouth his stomach is satisfied; he is satisfied by the yield of his lips. Death and life are in the power of the tongue, and those who love it will eat its fruits. He who finds a wife finds a good thing and obtains favor from the Lord."
  },
  {
    id: 107,
    chapter: 18,
    verse: "22-24",
    title: "The Virtuous Wife",
    quote: "The poor use entreaties, but the rich answer roughly. A man of many companions may come to ruin, but there is a friend who sticks closer than a brother."
  },
  {
    id: 108,
    chapter: 18,
    verse: "25-28",
    title: "Righteousness and Wickedness",
    quote: "Whoever isolates himself seeks his own desire; he breaks out against all sound judgment. A fool takes no pleasure in understanding, but only in expressing his opinion. When wickedness comes, contempt comes also, and with dishonor comes disgrace. The words of a man's mouth are deep waters; the fountain of wisdom is a bubbling brook. It is not good to be partial to the wicked or to deprive the righteous of justice. A fool's lips walk into a fight, and his mouth invites a beating."
  },
  {
    id: 109,
    chapter: 19,
    verse: "1-6",
    title: "Better a Poor Man's Integrity",
    quote: "Better is a poor person who walks in his integrity than one who is crooked in speech and is a fool. Desire without knowledge is not good, and whoever makes haste with his feet misses his way. When a man's folly brings his way to ruin, his heart rages against the Lord. Wealth brings many new friends, but a poor man is deserted by his friend. A false witness will not go unpunished, and he who breathes out lies will perish."
  },
  {
    id: 110,
    chapter: 19,
    verse: "7-12",
    title: "The Compassion of the Poor",
    quote: "Many seek the favor of a generous man, and everyone is a friend to a man who gives gifts. All a poor man's brothers hate him; how much more do his friends go far from him! He pursues them with words, but does not have them. Whoever gets sense loves his own soul; he who keeps understanding will discover good. A false witness will not go unpunished, and he who breathes out lies will perish. It is not fitting for a fool to live in luxury, much less for a slave to rule over princes."
  },
  {
    id: 111,
    chapter: 19,
    verse: "13-17",
    title: "Discipline and Instruction",
    quote: "Good sense makes one slow to anger, and it is his glory to overlook an offense. A king's wrath is like the growling of a lion, but his favor is like dew on the grass. A foolish son is ruin to his father, and a wife's quarreling is a continual dripping of rain. House and wealth are inherited from fathers, but a prudent wife is from the Lord. Slothfulness casts into a deep sleep, and an idle person will suffer hunger."
  },
  {
    id: 112,
    chapter: 19,
    verse: "18-22",
    title: "Discipline Your Son",
    quote: "Discipline your son, for there is hope; do not set your heart on putting him to death. A man of great wrath will pay the penalty, for if you deliver him, you will only have to do it again. Listen to advice and accept instruction, that you may gain wisdom in the future. Many are the plans in the mind of a man, but it is the purpose of the Lord that will stand. What is desired in a man is steadfast love, and a poor man is better than a liar."
  },
  {
    id: 113,
    chapter: 19,
    verse: "23-29",
    title: "The Fear of the Lord Leads to Life",
    quote: "The fear of the Lord leads to life, and whoever has it rests satisfied; he will not be visited by harm. The sluggard buries his hand in the dish and will not even bring it back to his mouth. Strike a scoffer, and the simple will learn prudence; reprove a man of understanding, and he will gain knowledge. He who does violence to his father and chases away his mother is a son who brings shame and reproach. Cease to hear instruction, my son, and you will stray from the words of knowledge."
  },
  {
    id: 114,
    chapter: 20,
    verse: "1-7",
    title: "Wine and Strong Drink",
    quote: "Wine is a mocker, strong drink a brawler, and whoever is led astray by it is not wise. The terror of a king is like the growling of a lion; whoever provokes him to anger forfeits his life. It is an honor for a man to keep aloof from strife, but every fool will be quarreling. The sluggard does not plow in the autumn; he will seek at harvest and have nothing. The purpose in a man's heart is like deep water, but a man of understanding will draw it out. Many a man proclaims his own steadfast love, but a faithful man who can find?"
  },
  {
    id: 115,
    chapter: 20,
    verse: "8-14",
    title: "The Value of Wisdom",
    quote: "A king who sits on the throne of judgment winnows all evil with his eyes. Who can say, 'I have made my heart pure; I am clean from my sin'? Unequal weights and unequal measures are both alike an abomination to the Lord. Even a child makes himself known by his acts, by whether his conduct is pure and upright. The hearing ear and the seeing eye, the Lord has made them both. Love not sleep, lest you come to poverty; open your eyes, and you will have plenty of bread."
  },
  {
    id: 116,
    chapter: 20,
    verse: "15-21",
    title: "The Value of Trustworthiness",
    quote: " 'Bad, bad,' says the buyer, but when he goes away, then he boasts. There is gold and abundance of costly stones, but the lips of knowledge are a precious jewel. Take a man's garment when he has put up security for a stranger, and hold it in pledge when he puts up security for foreigners. Bread gained by deceit is sweet to a man, but afterward his mouth will be full of gravel. Plans are established by counsel; by wise guidance wage war. Whoever goes about slandering reveals secrets; therefore do not associate with a simple babbler."
  },
  {
    id: 117,
    chapter: 20,
    verse: "22-25",
    title: "The Lord Will Repay",
    quote: "Do not say, 'I will repay evil'; wait for the Lord, and he will deliver you. Unequal weights are an abomination to the Lord, and false scales are not good. A man's steps are from the Lord; how then can man understand his way? It is a snare to say rashly, 'It is holy,' and to reflect only after making vows."
  },
  {
    id: 118,
    chapter: 20,
    verse: "26-30",
    title: "The Glory of Young Men",
    quote: "A wise king winnows the wicked and drives the wheel over them. The spirit of man is the lamp of the Lord, searching all his innermost parts. Steadfast love and faithfulness preserve the king, and by steadfast love his throne is upheld. The glory of young men is their strength, but the splendor of old men is their gray hair. Blows that wound cleanse away evil; strokes make clean the innermost parts."
  },

  {
    id: 119,
    chapter: 21,
    verse: "1-6",
    title: "The King's Heart",
    quote: "The king's heart is a stream of water in the hand of the Lord; he turns it wherever he will. Every way of a man is right in his own eyes, but the Lord weighs the heart. To do righteousness and justice is more acceptable to the Lord than sacrifice. Haughty eyes and a proud heart, the lamp of the wicked, are sin. The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty. The getting of treasures by a lying tongue is a fleeting vapor and a snare of death."
  },
  {
    id: 120,
    chapter: 21,
    verse: "7-12",
    title: "The Righteous and the Wicked",
    quote: "The violence of the wicked will sweep them away, because they refuse to do what is just. The way of the guilty is crooked, but the conduct of the pure is upright. It is better to live in a corner of the housetop than in a house shared with a quarrelsome wife. The soul of the wicked desires evil; his neighbor finds no mercy in his eyes. When a scoffer is punished, the simple becomes wise; when a wise man is instructed, he gains knowledge. The Righteous One observes the house of the wicked; he throws the wicked down to ruin."
  },
  {
    id: 121,
    chapter: 21,
    verse: "13-17",
    title: "The Cry of the Poor",
    quote: "Whoever closes his ear to the cry of the poor will himself call out and not be answered. A gift in secret averts anger, and a concealed bribe, strong wrath. When justice is done, it is a joy to the righteous but terror to evildoers. One who wanders from the way of good sense will rest in the assembly of the dead. Whoever loves pleasure will be a poor man; he who loves wine and oil will not be rich."
  },
  {
    id: 122,
    chapter: 21,
    verse: "18-22",
    title: "The Wise in Heart",
    quote: "The wicked is a ransom for the righteous, and the traitor for the upright. It is better to live in a desert land than with a quarrelsome and fretful woman. Precious treasure and oil are in a wise man's dwelling, but a foolish man devours it. Whoever pursues righteousness and kindness will find life, righteousness, and honor."
  },
  {
    id: 123,
    chapter: 21,
    verse: "23-26",
    title: "The Watchful One",
    quote: "Whoever keeps his mouth and his tongue keeps himself out of trouble. 'Scoffer' is the name of the arrogant, haughty man who acts with arrogant pride. The desire of the sluggard kills him, for his hands refuse to labor. All day long he craves and craves, but the righteous gives and does not hold back."
  },
  {
    id: 124,
    chapter: 21,
    verse: "27-31",
    title: "The Horse is Made Ready for the Day of Battle",
    quote: "The sacrifice of the wicked is an abomination; how much more when he brings it with evil intent. A false witness will perish, but the word of a man who hears will endure. A wicked man puts on a bold face, but the upright gives thought to his ways. No wisdom, no understanding, no counsel can avail against the Lord. The horse is made ready for the day of battle, but the victory belongs to the Lord."
  },
  {
    id: 125,
    chapter: 22,
    verse: "1-5",
    title: "A Good Name is to be Chosen",
    quote: "A good name is to be chosen rather than great riches, and favor is better than silver or gold. The rich and the poor meet together; the Lord is the maker of them all. The prudent sees danger and hides himself, but the simple go on and suffer for it. The reward for humility and fear of the Lord is riches and honor and life. Thorns and snares are in the way of the crooked; whoever guards his soul will keep far from them."
  },
  {
    id: 126,
    chapter: 22,
    verse: "6-9",
    title: "Train Up a Child",
    quote: "Train up a child in the way he should go; even when he is old he will not depart from it. The rich rules over the poor, and the borrower is the slave of the lender. Whoever sows injustice will reap calamity, and the rod of his fury will fail. Whoever has a bountiful eye will be blessed, for he shares his bread with the poor."
  },
  {
    id: 127,
    chapter: 22,
    verse: "10-16",
    title: "The Generous and the Oppressed",
    quote: "Drive out a scoffer, and strife will go out, and quarreling and abuse will cease. He who loves purity of heart, and whose speech is gracious, will have the king as his friend. The eyes of the Lord keep watch over knowledge, but he overthrows the words of the traitor. The sluggard says, 'There is a lion outside! I shall be killed in the streets!' The mouth of forbidden women is a deep pit; he with whom the Lord is angry will fall into it. Folly is bound up in the heart of a child, but the rod of discipline drives it far from him."
  },
  {
    id: 128,
    chapter: 22,
    verse: "17-21",
    title: "Words of the Wise",
    quote: "Incline your ear, and hear the words of the wise, and apply your heart to my knowledge, for it will be pleasant if you keep them within you, if all of them are ready on your lips. That your trust may be in the Lord, I have made them known to you today, even to you. Have I not written for you thirty sayings of counsel and knowledge, to make you know what is right and true, that you may give a true answer to those who sent you?"
  },
  {
    id: 129,
    chapter: 22,
    verse: "22-29",
    title: "Do Not Rob the Poor",
    quote: "Do not rob the poor, because he is poor, or crush the afflicted at the gate, for the Lord will plead their cause and rob of life those who rob them. Make no friendship with a man given to anger, nor go with a wrathful man, lest you learn his ways and entangle yourself in a snare. Be not one of those who give pledges, who put up security for debts. If you have nothing with which to pay, why should your bed be taken from under you? Do not move the ancient landmark that your fathers have set. Do you see a man skillful in his work? He will stand before kings; he will not stand before obscure men."
  },
  {
    id: 130,
    chapter: 23,
    verse: "1-5",
    title: "When Dining with a Ruler",
    quote: "When you sit down to eat with a ruler, observe carefully what is before you, and put a knife to your throat if you are given to appetite. Do not desire his delicacies, for they are deceptive food. Do not toil to acquire wealth; be discerning enough to desist. When your eyes light on it, it is gone, for suddenly it sprouts wings, flying like an eagle toward heaven."
  },
  {
    id: 131,
    chapter: 23,
    verse: "6-14",
    title: "Listen to Your Father's Instruction",
    quote: "Do not eat the bread of a man who is stingy; do not desire his delicacies, for he is like one who is inwardly calculating. 'Eat and drink!' he says to you, but his heart is not with you. You will vomit up the morsels that you have eaten, and waste your pleasant words. Do not speak in the hearing of a fool, for he will despise the good sense of your words. Do not move an ancient landmark or enter the fields of the fatherless, for their Redeemer is strong; he will plead their cause against you. Apply your heart to instruction and your ear to words of knowledge."
  },
  {
    id: 132,
    chapter: 23,
    verse: "15-21",
    title: "My Son, Be Wise",
    quote: "My son, if your heart is wise, my heart too will be glad. My inmost being will exult when your lips speak what is right. Let not your heart envy sinners, but continue in the fear of the Lord all the day. Surely there is a future, and your hope will not be cut off. Hear, my son, and be wise, and direct your heart in the way. Be not among drunkards or among gluttonous eaters of meat, for the drunkard and the glutton will come to poverty, and slumber will clothe them with rags."
  },
  {
    id: 133,
    chapter: 23,
    verse: "22-28",
    title: "Listen to Your Father Who Begot You",
    quote: "Listen to your father who gave you life, and do not despise your mother when she is old. Buy truth, and do not sell it; buy wisdom, instruction, and understanding. The father of the righteous will greatly rejoice; he who fathers a wise son will be glad in him. Let your father and mother be glad; let her who bore you rejoice. My son, give me your heart, and let your eyes observe my ways. For a prostitute is a deep pit; an adulteress is a narrow well. She lies in wait like a robber and increases the traitors among mankind."
  },
  {
    id: 134,
    chapter: 23,
    verse: "29-35",
    title: "Who has Woe? Who has Sorrow?",
    quote: "Who has woe? Who has sorrow? Who has strife? Who has complaining? Who has wounds without cause? Who has redness of eyes? Those who tarry long over wine; those who go to try mixed wine. Do not look at wine when it is red, when it sparkles in the cup and goes down smoothly. In the end it bites like a serpent and stings like an adder. Your eyes will see strange things, and your heart utter perverse things. You will be like one who lies down in the midst of the sea, like one who lies on the top of a mast. 'They struck me,' you will say, 'but I was not hurt; they beat me, but I did not feel it. When shall I awake? I must have another drink.'"
  },
  {
    id: 135,
    chapter: 24,
    verse: "1-7",
    title: "Wisdom for Kings and Subjects",
    quote: "Be not envious of evil men, nor desire to be with them, for their hearts devise violence, and their lips talk of trouble. By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled with all precious and pleasant riches. A wise man is full of strength, and a man of knowledge enhances his might, for by wise guidance you can wage your war, and in abundance of counselors there is victory. Wisdom is too high for a fool; in the gate he does not open his mouth."
  },
  {
    id: 136,
    chapter: 24,
    verse: "8-14",
    title: "The Righteous Fall Seven Times",
    quote: "Whoever plans to do evil will be called a schemer. The devising of folly is sin, and the scoffer is an abomination to mankind. If you faint in the day of adversity, your strength is small. Rescue those who are being taken away to death; hold back those who are stumbling to the slaughter. If you say, 'Behold, we did not know this,' does not he who weighs the heart perceive it? Does not he who keeps watch over your soul know it, and will he not repay man according to his work? My son, eat honey, for it is good, and the drippings of the honeycomb are sweet to your taste. Know that wisdom is such to your soul; if you find it, there will be a future, and your hope will not be cut off."
  },
  {
    id: 137,
    chapter: 24,
    verse: "15-20",
    title: "The Wicked will Fall",
    quote: "Lie not in wait as a wicked man against the dwelling of the righteous; do no violence to his home; for the righteous falls seven times and rises again, but the wicked stumble in times of calamity. Do not rejoice when your enemy falls, and let not your heart be glad when he stumbles, lest the Lord see it and be displeased, and turn away his anger from him. Fret not yourself because of evildoers, and be not envious of the wicked, for the evil man has no future; the lamp of the wicked will be put out."
  },
  {
    id: 138,
    chapter: 24,
    verse: "21-26",
    title: "More Sayings of the Wise",
    quote: "My son, fear the Lord and the king, and do not join with those who do otherwise, for disaster will arise suddenly from them, and who knows the ruin that will come from them both? These also are sayings of the wise. Partiality in judging is not good. Whoever says to the wicked, 'You are in the right,' will be cursed by peoples, abhorred by nations, but those who rebuke the wicked will have delight, and a good blessing will come upon them. Whoever gives an honest answer kisses the lips."
  },
  {
    id: 139,
    chapter: 24,
    verse: "27-34",
    title: "Wisdom for Work and War",
    quote: "Prepare your work outside; get everything ready for yourself in the field, and after that build your house. Be not a witness against your neighbor without cause, and do not deceive with your lips. Do not say, 'I will do to him as he has done to me; I will pay the man back for what he has done.' I passed by the field of a sluggard, by the vineyard of a man lacking sense, and behold, it was all overgrown with thorns; the ground was covered with nettles, and its stone wall was broken down. Then I saw and considered it; I looked and received instruction. A little sleep, a little slumber, a little folding of the hands to rest, and poverty will come upon you like a robber, and want like an armed man."
  },
  {
    id: 140,
    chapter: 25,
    verse: "1-7",
    title: "More Proverbs of Solomon",
    quote: "These also are proverbs of Solomon which the men of Hezekiah king of Judah copied. It is the glory of God to conceal things, but the glory of kings is to search things out. As the heavens for height, and the earth for depth, so the heart of kings is unsearchable. Take away the dross from the silver, and the smith has material for a vessel; take away the wicked from the presence of the king, and his throne will be established in righteousness. Do not put yourself forward in the king's presence or stand in the place of the great, for it is better to be told, 'Come up here,' than to be put lower in the presence of a noble."
  },
  {
    id: 141,
    chapter: 25,
    verse: "8-14",
    title: "Patience and Good Counsel",
    quote: "What your eyes have seen do not hastily bring into court, for what will you do in the end, when your neighbor puts you to shame? Argue your case with your neighbor himself, and do not reveal another's secret, lest he who hears you bring shame upon you, and your ill repute have no end. A word fitly spoken is like apples of gold in a setting of silver. Like a gold ring or an ornament of gold is a wise reprover to a listening ear. Like the cold of snow in the time of harvest is a faithful messenger to those who send him; he refreshes the soul of his masters."
  },
  {
    id: 142,
    chapter: 25,
    verse: "15-22",
    title: "The Virtue of Self-Control",
    quote: "With patience a ruler may be persuaded, and a soft tongue will break a bone. If you have found honey, eat only enough for you, lest you have your fill of it and vomit it. Let your foot be seldom in your neighbor's house, lest he have his fill of you and hate you. A man who bears false witness against his neighbor is like a war club, or a sword, or a sharp arrow. Trusting in a treacherous man in time of trouble is like a bad tooth or a foot that slips. Whoever sings songs to a heavy heart is like one who takes off a garment on a cold day, and like vinegar on soda is one who sings songs to a heavy heart."
  },
  {
    id: 143,
    chapter: 25,
    verse: "23-28",
    title: "The Wise Avoid Strife",
    quote: "If your enemy is hungry, give him bread to eat, and if he is thirsty, give him water to drink, for you will heap burning coals on his head, and the Lord will reward you. The north wind brings forth rain, and a backbiting tongue, angry looks. It is better to live in a corner of the housetop than in a house shared with a quarrelsome wife. Like cold water to a thirsty soul, so is good news from a far country. Like a muddied spring or a polluted fountain is a righteous man who gives way before the wicked."
  },
  {
    id: 144,
    chapter: 26,
    verse: "1-11",
    title: "Like Snow in Summer or Rain in Harvest",
    quote: "Like snow in summer or rain in harvest, so honor is not fitting for a fool. Like a sparrow in its flitting, like a swallow in its flying, a curse that is causeless does not alight. A whip for the horse, a bridle for the donkey, and a rod for the back of fools. Answer not a fool according to his folly, lest you be like him yourself. Answer a fool according to his folly, lest he be wise in his own eyes. Whoever sends a message by the hand of a fool cuts off his own feet and drinks violence. Like a lame man's legs, which hang useless, is a proverb in the mouth of fools. Like one who binds the stone in the sling is one who gives honor to a fool. Like a thorn that goes up into the hand of a drunkard is a proverb in the mouth of fools. Like an archer who wounds everyone is one who hires a passing fool or drunkard."
  },
  {
    id: 145,
    chapter: 26,
    verse: "12-16",
    title: "The Sluggard",
    quote: "Like a dog that returns to his vomit is a fool who repeats his folly. Do you see a man who is wise in his own eyes? There is more hope for a fool than for him. The sluggard says, 'There is a lion in the road! There is a lion in the streets!' As a door turns on its hinges, so does a sluggard on his bed. The sluggard buries his hand in the dish; it wears him out to bring it back to his mouth."
  },
  {
    id: 146,
    chapter: 26,
    verse: "17-26",
    title: "Interference in Quarrels",
    quote: "Whoever meddles in a quarrel not his own is like one who takes a passing dog by the ears. Like a madman who throws firebrands, arrows, and death is the man who deceives his neighbor and says, 'I am only joking!' For lack of wood the fire goes out, and where there is no whisperer, quarreling ceases. As charcoal to hot embers and wood to fire, so is a quarrelsome man for kindling strife. The words of a whisperer are like delicious morsels; they go down into the inner parts of the body. Like the glaze covering an earthen vessel are fervent lips with an evil heart. Whoever hates disguises himself with his lips and harbors deceit in his heart; when he speaks graciously, believe him not, for there are seven abominations in his heart. Though his hatred be covered with deception, his wickedness will be exposed in the assembly."
  },
  {
    id: 147,
    chapter: 26,
    verse: "27-28",
    title: "Deceitful Enemies",
    quote: "Whoever digs a pit will fall into it, and a stone will come back on him who starts it rolling. A lying tongue hates its victims, and a flattering mouth works ruin."
  },
  {
    id: 148,
    chapter: 27,
    verse: "1-6",
    title: "Do Not Boast about Tomorrow",
    quote: "Do not boast about tomorrow, for you do not know what a day may bring. Let another praise you, and not your own mouth; a stranger, and not your own lips. A stone is heavy, and sand is weighty, but a fool's provocation is heavier than both. Wrath is cruel, anger is overwhelming, but who can stand before jealousy? Better is open rebuke than hidden love. Faithful are the wounds of a friend; profuse are the kisses of an enemy."
  },
  {
    id: 149,
    chapter: 27,
    verse: "7-10",
    title: "The Value of a Friend",
    quote: "One who is full loathes honey, but to one who is hungry everything bitter is sweet. Like a bird that strays from its nest is a man who strays from his home. Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel. Do not forsake your friend and your father's friend, and do not go to your brother's house in the day of your calamity. Better is a neighbor who is near than a brother who is far away."
  },
  {
    id: 150,
    chapter: 27,
    verse: "11-16",
    title: "Prudent Living",
    quote: "Be wise, my son, and make my heart glad, that I may answer him who reproaches me. The prudent sees danger and hides himself, but the simple go on and suffer for it. Take a man's garment when he has put up security for a stranger, and hold it in pledge when he puts up security for an adulteress. Whoever blesses his neighbor with a loud voice, rising early in the morning, will be counted as cursing. A continual dripping on a rainy day and a quarrelsome wife are alike; to restrain her is to restrain the wind or to grasp oil in one's right hand."
  },
  {
    id: 151,
    chapter: 27,
    verse: "17-22",
    title: "Iron Sharpens Iron",
    quote: "Iron sharpens iron, and one man sharpens another. Whoever tends a fig tree will eat its fruit, and he who guards his master will be honored. As in water face reflects face, so the heart of man reflects the man. Sheol and Abaddon are never satisfied, and never satisfied are the eyes of man. The crucible is for silver, and the furnace is for gold, and a man is tested by his praise. Crush a fool in a mortar with a pestle along with crushed grain, yet his folly will not depart from him."
  },
  {
    id: 152,
    chapter: 27,
    verse: "23-27",
    title: "Know the State of Your Flocks",
    quote: "Know well the condition of your flocks, and give attention to your herds, for riches do not last forever; and does a crown endure to all generations? When the grass is gone and the new growth appears and the vegetation of the mountains is gathered, the lambs will provide your clothing, and the goats the price of a field. There will be enough goats' milk for your food, for the food of your household and maintenance for your girls."
  },
  {
    id: 157,
    chapter: 28,
    verse: "1-5",
    title: "The Wicked Flee When No One Pursues",
    quote: "The wicked flee when no one pursues, but the righteous are bold as a lion. When a land transgresses, it has many rulers, but with a man of understanding and knowledge, its stability will long continue. A poor man who oppresses the poor is a beating rain that leaves no food. Those who forsake the law praise the wicked, but those who keep the law strive against them. Evil men do not understand justice, but those who seek the Lord understand it completely."
  },
  {
    id: 158,
    chapter: 28,
    verse: "6-10",
    title: "Blessings on the Righteous",
    quote: "Better is a poor man who walks in his integrity than a rich man who is crooked in his ways. The one who keeps the law is a son with understanding, but a companion of gluttons shames his father. Whoever multiplies his wealth by interest and profit gathers it for him who is generous to the poor. If one turns away his ear from hearing the law, even his prayer is an abomination. Whoever misleads the upright into an evil way will fall into his own pit, but the blameless will have a goodly inheritance."
  },
  {
    id: 159,
    chapter: 28,
    verse: "11-16",
    title: "The Rich and the Poor",
    quote: "A rich man is wise in his own eyes, but a poor man who has understanding will find him out. When the righteous triumph, there is great glory, but when the wicked rise, people hide themselves. Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy. Blessed is the one who fears the Lord always, but whoever hardens his heart will fall into calamity. Like a roaring lion or a charging bear is a wicked ruler over a poor people. A ruler who lacks understanding is a cruel oppressor, but he who hates unjust gain will prolong his days."
  },
  {
    id: 160,
    chapter: 28,
    verse: "17-22",
    title: "The Faithful and the Crooked",
    quote: "If one is burdened with the blood of another, he will be a fugitive until death; let no one help him. Whoever walks in integrity will be delivered, but he who is crooked in his ways will suddenly fall. Whoever works his land will have plenty of bread, but he who follows worthless pursuits will have plenty of poverty. A faithful man will abound with blessings, but whoever hastens to be rich will not go unpunished. To show partiality is not good, but for a piece of bread a man will do wrong. A stingy man hastens after wealth and does not know that poverty will come upon him."
  },
  {
    id: 161,
    chapter: 28,
    verse: "23-28",
    title: "The Lawless and the Righteous",
    quote: "Whoever rebukes a man will afterward find more favor than he who flatters with his tongue. Whoever robs his father or his mother and says, 'That is no transgression,' is a companion to a man who destroys. A greedy man stirs up strife, but the one who trusts in the Lord will be enriched. Whoever trusts in his own mind is a fool, but he who walks in wisdom will be delivered. Whoever gives to the poor will not want, but he who hides his eyes will get many a curse. When the wicked rise, people hide themselves, but when they perish, the righteous increase."
  },
  {
    id: 162,
    chapter: 29,
    verse: "1-6",
    title: "He who is Often Reproved",
    quote: "He who is often reproved, yet stiffens his neck, will suddenly be broken beyond healing. When the righteous increase, the people rejoice, but when the wicked rule, the people groan. He who loves wisdom makes his father glad, but a companion of prostitutes squanders his wealth. By justice a king builds up the land, but he who exacts gifts tears it down. A man who flatters his neighbor spreads a net for his feet. An evil man is ensnared in his transgression, but a righteous man sings and rejoices."
  },
  {
    id: 163,
    chapter: 29,
    verse: "7-11",
    title: "Scoffers, Fools, and Wise Men",
    quote: "A righteous man knows the rights of the poor; a wicked man does not understand such knowledge. Scoffers set a city aflame, but the wise turn away wrath. If a wise man has an argument with a fool, the fool only rages and laughs, and there is no quiet. Bloodthirsty men hate one who is blameless and seek the life of the upright. A fool gives full vent to his spirit, but a wise man quietly holds it back."
  },
  {
    id: 164,
    chapter: 29,
    verse: "12-20",
    title: "Words and Deeds",
    quote: "If a ruler listens to falsehood, all his officials will be wicked. The poor man and the oppressor meet together; the Lord gives light to the eyes of both. If a king faithfully judges the poor, his throne will be established forever. The rod and reproof give wisdom, but a child left to himself brings shame to his mother. When the wicked increase, transgression increases, but the righteous will look upon their downfall. Discipline your son, and he will give you rest; he will give delight to your heart. Where there is no prophetic vision the people cast off restraint, but blessed is he who keeps the law. By mere words a servant is not disciplined, for though he understands, he will not respond. Do you see a man who is hasty in his words? There is more hope for a fool than for him."
  },
  {
    id: 165,
    chapter: 29,
    verse: "21-27",
    title: "The Righteous and the Wicked",
    quote: "Whoever pampers his servant from childhood will in the end find him his heir. A man of wrath stirs up strife, and one given to anger causes much transgression. One's pride will bring him low, but he who is lowly in spirit will obtain honor. The partner of a thief hates his own life; he hears the curse, but discloses nothing. The fear of man lays a snare, but whoever trusts in the Lord is safe. Many seek the face of a ruler, but it is from the Lord that a man gets justice. An unjust man is an abomination to the righteous, but one whose way is straight is an abomination to"
  },
  {
    id: 166,
    chapter: 29,
    verse: "28",
    title: "The Righteous Rejoice",
    quote: "The righteous hates falsehood, but the wicked brings shame and disgrace."
  },
  {
    id: 167,
    chapter: 30,
    verse: "1-4",
    title: "The Words of Agur",
    quote: "The words of Agur son of Jakeh. The oracle. The man declares, I am weary, O God; I am weary, O God, and worn out. Surely I am too stupid to be a man. I have not the understanding of a man. I have not learned wisdom, nor have I knowledge of the Holy One. Who has ascended to heaven and come down? Who has gathered the wind in his fists? Who has wrapped up the waters in a garment? Who has established all the ends of the earth? What is his name, and what is his son's name? Surely you know!"
  },
  {
    id: 168,
    chapter: 30,
    verse: "5-9",
    title: "Two Things I Ask of You",
    quote: "Every word of God proves true; he is a shield to those who take refuge in him. Do not add to his words, lest he rebuke you and you be found a liar. Two things I ask of you; deny them not to me before I die: Remove far from me falsehood and lying; give me neither poverty nor riches; feed me with the food that is needful for me, lest I be full and deny you and say, 'Who is the Lord?' or lest I be poor and steal and profane the name of my God."
  },
  {
    id: 169,
    chapter: 30,
    verse: "10-17",
    title: "Four Things that are Never Satisfied",
    quote: "Do not slander a servant to his master, lest he curse you, and you be held guilty. There are those who curse their fathers and do not bless their mothers. There are those who are clean in their own eyes but are not washed of their filth. There are those—how lofty are their eyes, how high their eyelids lift!—who devour the widows' houses and for a pretense make long prayers. They will receive the greater condemnation. There are those who rob their fathers and do not acknowledge their mothers; they are the kind who do not bless their mothers."
  },
  {
    id: 170,
    chapter: 30,
    verse: "18-20",
    title: "Four things of Wonder",
    quote: "Three things are too wonderful for me; four I do not understand: the way of an eagle in the sky, the way of a serpent on a rock, the way of a ship on the high seas, and the way of a man with a virgin. This is the way of an adulteress: she eats and wipes her mouth and says, 'I have done no wrong.'"
  },
  {
    id: 171,
    chapter: 30,
    verse: "21-23",
    title: "Four Things that are Small but Wise",
    quote: "Under three things the earth trembles; under four it cannot bear up: a slave when he becomes king, and a fool when he is filled with food; an unloved woman when she gets a husband, and a maidservant when she displaces her mistress."
  },
  {
    id: 172,
    chapter: 30,
    verse: "24-28",
    title: "Four Things that are Stately",
    quote: "Four things on earth are small, but they are exceedingly wise: the ants are a people not strong, yet they provide their food in the summer; the rock badgers are a people not mighty, yet they make their homes in the cliffs; the locusts have no king, yet all of them march in rank; the lizard you can take in your hands, yet it is in kings' palaces."
  },
  {
    id: 173,
    chapter: 30,
    verse: "29-33",
    title: "Four things that are Magnificent",
    quote: "Three things are stately in their tread; four are stately in their stride: the lion, which is mightiest among beasts and does not turn back before any; the strutting rooster, the he-goat, and a king whose army is with him. If you have been foolish, exalting yourself, or if you have been devising evil, put your hand on your mouth. For pressing milk produces curds, pressing the nose produces blood, and pressing anger produces strife."
  },
  {
    id: 157,
    chapter: 31,
    verse: "1-9",
    title: "The Words of King Lemuel",
    quote: "The words of King Lemuel. An oracle that his mother taught him: What are you doing, my son? What are you doing, son of my womb? What are you doing, son of my vows? Do not give your strength to women, your ways to those who destroy kings. It is not for kings, O Lemuel, it is not for kings to drink wine, or for rulers to take strong drink, lest they drink and forget what has been decreed and pervert the rights of all the afflicted. Give strong drink to the one who is perishing, and wine to those in bitter distress; let them drink and forget their poverty and remember their misery no more. Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy."
  },
  {
    id: 158,
    chapter: 31,
    verse: "10-20",
    title: "The Woman Who Fears the Lord",
    quote: "An excellent wife who can find? She is far more precious than jewels. The heart of her husband trusts in her, and he will have no lack of gain. She does him good, and not harm, all the days of her life. She seeks wool and flax, and works with willing hands. She is like the ships of the merchant; she brings her food from afar. She rises while it is yet night and provides food for her household and portions for her maidens. She considers a field and buys it; with the fruit of her hands she plants a vineyard. She dresses herself with strength and makes her arms strong. She perceives that her merchandise is profitable. Her lamp does not go out at night. She puts her hands to the distaff, and her hands hold the spindle."
  },
  {
    id: 159,
    chapter: 31,
    verse: "21-31",
    title: "The Woman Who Fears the Lord (cont'd)",
    quote: "She opens her hand to the poor and reaches out her hands to the needy. She is not afraid of snow for her household, for all her household are clothed in scarlet. She makes bed coverings for herself; her clothing is fine linen and purple. Her husband is known in the gates when he sits among the elders of the land. She makes linen garments and sells them; she delivers sashes to the merchant. Strength and dignity are her clothing, and she laughs at the time to come. She opens her mouth with wisdom, and the teaching of kindness is on her tongue. She looks well to the ways of her household and does not eat the bread of idleness. Her children rise up and call her blessed; her husband also, and he praises her: 'Many women have done excellently, but you surpass them all.' Charm is deceitful, and beauty is vain, but a woman who fears the Lord is to be praised. Give her of the fruit of her hands, and let her works praise her in the gates."
  }
]



function getProverbs() {
  if (localStorage.getItem('proverbs') && localStorage.getItem('proverbs') != '[]') {
    return JSON.parse(localStorage.getItem('proverbs'))
  } else {
    return proverbs
  }
}

function displayProverbs() {
  let proverbs = getProverbs()
  let proverbs_html = ``
  let ndx = 0
    for (let p of proverbs) {
      proverbs_html += `
    <div class="proverb${p.chapter} proverbs card col-sm-4" data-ndx="$ {ndx}">
      <h5 class="card-title">proverbs ${p.chapter}:${p.verse}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${p.title}</h6>
      <p class="card-text">${p.quote}</p>
    </div>
    `
      ndx++
    }
    document.querySelector("#proverbs").innerHTML = proverbs_html
    }
    
  
//need loop to print all proverbs
displayProverbs()