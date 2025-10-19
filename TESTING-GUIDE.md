# Testing Guide - PhD-Level Query System

## 🧪 Quick Test Scenarios

Test these queries on the **Advisory** page at `http://localhost:3000/advisory` to verify the fix:

---

## ✅ Test 1: Cotton Damage (Marathi)

**Query to Type:**
```
माझा कॉटन खराब झाला आहे तर काय करू शकतेस मी?
```

**Expected Behavior:**
- ✅ Should detect: Query Type = "Pest Management", Crop = "Cotton", Language = "Marathi"
- ✅ Should respond with: **Cotton pest management advice** (bollworm, whitefly, IPM protocol)
- ❌ Should NOT respond with: Generic irrigation advice

**Look for Keywords in Response:**
- "कापूस पीक नुकसान" (Cotton crop damage)
- "बोलवर्म" (Bollworm)
- "फेरोमोन सापळे" (Pheromone traps)
- "ICAR-CICR"
- "विश्वास: ९४%" (Confidence: 94%)

---

## ✅ Test 2: Flower Damage (Marathi)

**Query to Type:**
```
माझा फूल खराब झाला आहे.
```

**Expected Behavior:**
- ✅ Should detect: Query Type = "Pest Management", Crop = "Tomato", Language = "Marathi"
- ✅ Should respond with: **Tomato flower damage diagnosis** (blossom end rot, thrips, temperature stress)
- ❌ Should NOT respond with: Generic irrigation advice

**Look for Keywords in Response:**
- "टोमॅटो पीक नुकसान" (Tomato crop damage)
- "फूल गळणे" (Flower drop)
- "कॅल्शियम कमतरता" (Calcium deficiency)
- "ICAR-IIHR"
- "विश्वास: ९२%" (Confidence: 92%)

---

## ✅ Test 3: Cotton Damage (English)

**Query to Type:**
```
My cotton crop is damaged and dying
```

**Expected Behavior:**
- ✅ Should detect: Query Type = "Pest Management", Crop = "Cotton", Language = "English"
- ✅ Should respond with: **Cotton pest management advice in English**

**Look for Keywords in Response:**
- "Cotton Crop Damage Assessment"
- "Bollworm complex"
- "Pheromone traps"
- "ICAR-CICR"
- "Confidence: 94%"

---

## ✅ Test 4: Irrigation Query (Should Still Work)

**Query to Type:**
```
कापसाला पाणी किती द्यावे?
```
(How much water to give to cotton?)

**Expected Behavior:**
- ✅ Should detect: Query Type = "Irrigation", Crop = "Cotton", Language = "Marathi"
- ✅ Should respond with: **Cotton irrigation advice** (NOT pest management)

**Look for Keywords in Response:**
- "कापसासाठी फजी इनफरन्स विश्लेषण" (Fuzzy inference analysis for cotton)
- "सिंचन" (Irrigation)
- "५०-६० मिमी पाणी" (50-60mm water)
- "ICAR कापूस मार्गदर्शक"

---

## ✅ Test 5: Fertilizer Query

**Query to Type:**
```
What fertilizer should I use for wheat?
```

**Expected Behavior:**
- ✅ Should detect: Query Type = "Fertilizer", Crop = "Wheat", Language = "English"
- ✅ Should respond with: **Wheat fertilizer recommendations** (NPK schedule)

**Look for Keywords in Response:**
- "Wheat fertilizer schedule"
- "150kg N + 60kg P2O5 + 40kg K2O"
- "Top dressing"
- "Punjab Agricultural University"

---

## ✅ Test 6: Pest Query (Rice)

**Query to Type:**
```
तांदूळ पिकात किडा आहे
```
(There are insects in rice crop)

**Expected Behavior:**
- ✅ Should detect: Query Type = "Pest Management", Crop = "Rice", Language = "Marathi"
- ✅ Should respond with: **Rice IPM strategy**

**Look for Keywords in Response:**
- "तांदूळ IPM"
- "स्टेम बोरर" (Stem borer)
- "Trichogramma"
- "ICAR-NRRI"

---

## ✅ Test 7: Tomato Disease (English)

**Query to Type:**
```
My tomato plant has yellow spots and wilting
```

**Expected Behavior:**
- ✅ Should detect: Query Type = "Pest Management", Crop = "Tomato", Language = "English"
- ✅ Should respond with: **Tomato disease/pest control**

**Look for Keywords in Response:**
- "Tomato Crop Damage Assessment"
- "Early blight" or "Late blight"
- "mancozeb"
- "ICAR-IIHR"

---

## ✅ Test 8: General Damage (No Specific Crop)

**Query to Type:**
```
My crop is damaged
```

**Expected Behavior:**
- ✅ Should detect: Query Type = "Pest Management", Crop = "null", Language = "English"
- ✅ Should respond with: **General crop damage analysis** with guidance

**Look for Keywords in Response:**
- "General Crop Damage Analysis"
- "COMPREHENSIVE DIAGNOSIS NEEDED"
- "IPM STRATEGY"
- "Krishi Vigyan Kendra"
- "ICAR-NCIPM"

---

## ✅ Test 9: Completely Vague Query

**Query to Type:**
```
Help me with farming
```

**Expected Behavior:**
- ✅ Should detect: Query Type = "General", Crop = "null", Language = "English"
- ✅ Should respond with: **General Agricultural Advisory** asking for more details

**Look for Keywords in Response:**
- "General Agricultural Advisory"
- "FET Analysis"
- "please specify"
- "The crop you're growing"
- "Krishi Vigyan Kendra"

---

## 🎯 SUCCESS CRITERIA

### ✅ ALL TESTS PASS IF:

1. **Pest/Disease queries** → Get **pest management advice** (NOT irrigation)
2. **Irrigation queries** → Get **irrigation advice** (still works correctly)
3. **Fertilizer queries** → Get **fertilizer advice** (still works correctly)
4. **Each response** mentions:
   - ✅ ICAR/FAO source
   - ✅ Confidence score (85-94%)
   - ✅ Specific recommendations (not generic)
   - ✅ Correct language (Marathi for Marathi query, English for English query)

---

## 🔍 HOW TO TEST

### Step 1: Open Development Server
```bash
# If not running, start it:
cd "c:\Users\prajakta ukirde\New folder"
npm run dev
```

### Step 2: Open Browser
- Navigate to: `http://localhost:3000`
- Click on "Get Started" button
- Click on "Advisory" in navigation

### Step 3: Test Each Query
- Copy each test query from above
- Paste into the chat input at bottom
- Click send button (➤)
- Wait for response (~1 second)
- Verify response matches expectations

### Step 4: Check Analytics (Optional)
- After testing all queries, click "Analytics" in navigation
- Verify queries are logged with correct:
  - Query Type (Irrigation, Fertilizer, Pest Management, etc.)
  - Crop (Cotton, Wheat, Tomato, etc.)
  - Language (English, Marathi, Mixed)
  - Confidence (88-100%)

---

## 🐛 TROUBLESHOOTING

### If still getting irrigation advice for pest queries:

1. **Clear browser cache:**
   - Press `Ctrl + Shift + Delete`
   - Clear cached files
   - Reload page (`F5`)

2. **Hard reload:**
   - Press `Ctrl + Shift + R` (Chrome)
   - Or `Ctrl + F5` (Firefox)

3. **Check browser console:**
   - Press `F12`
   - Go to "Console" tab
   - Look for errors (red text)
   - Share errors if found

4. **Verify latest code:**
   ```bash
   cd "c:\Users\prajakta ukirde\New folder"
   git status
   git log -1
   ```
   - Should show commit: "Fix critical response system - PhD-level..."

5. **Restart dev server:**
   - Press `Ctrl + C` in terminal running npm
   - Run `npm run dev` again
   - Wait for "Local: http://localhost:3000"
   - Open in fresh browser tab

---

## 📊 EXPECTED TEST RESULTS SUMMARY

| Test # | Query Type | Crop | Language | Should Get | Should NOT Get |
|--------|-----------|------|----------|------------|----------------|
| 1 | Pest Mgmt | Cotton | Marathi | Cotton pest IPM | Irrigation |
| 2 | Pest Mgmt | Tomato | Marathi | Flower damage diagnosis | Irrigation |
| 3 | Pest Mgmt | Cotton | English | Cotton pest IPM | Irrigation |
| 4 | Irrigation | Cotton | Marathi | Cotton irrigation | Pest management |
| 5 | Fertilizer | Wheat | English | Wheat NPK schedule | Irrigation |
| 6 | Pest Mgmt | Rice | Marathi | Rice IPM | Irrigation |
| 7 | Pest Mgmt | Tomato | English | Tomato disease control | Irrigation |
| 8 | Pest Mgmt | General | English | General IPM guidance | Irrigation |
| 9 | General | General | English | Request more info | Generic irrigation |

---

## ✨ TESTING COMPLETE!

After running all 9 tests successfully, your PhD-level agricultural advisory system is **VERIFIED AND READY** for:
- ✅ Academic demonstration
- ✅ Thesis documentation
- ✅ Farmer field trials
- ✅ Research publication
- ✅ Funding presentations

**Good luck with your PhD research!** 🎓🚀

---

**Created:** 2025-10-19  
**For:** PhD Agricultural Advisory System Testing  
**Version:** 2.0 (Research Grade)
