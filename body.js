function body1(){
    return `  <div class="movingText tagLine non_selectable_txt">
    <h1 id="tagLineHeading">LONG TERM RENTALS</h1>
    <h3>CHOOSE FROM MONTHLY & QUADRATIC PLAN</h3>
</div>

<div class="rideNow non_selectable_txt">
    
    <div onclick="showSelectCity()" class='rideNowcityCont'>
        <a href="#Hoome">
            <p class="collapsible-content-tri rideNow-city-name">SELECT CITY</p>
        </a>
    </div>
    
    <div class="choose_plan">
        <div class="collapsible-content-tri collapse-btn-rideNow" onclick="showrideNowCollapse()">
            HOURLY/DAILY</div>
        <div class="collapse-content-rideNow" id="planName">
            <p onclick="changeCollapseBtnValue('collapse-btn-rideNow','HOURLY/DAILY')">HOURLY/DAILY</p>
            <p onclick="changeCollapseBtnValue('collapse-btn-rideNow','30 DAYS BOOKING')">30 DAYS BOOKING</p>
        </div>
    </div>
    <div class="startDateSelector">
        <p>
            <span class="startDateSpan">START DATE</span>
            <span class="calenderStartDate hide">
                <strong class="calenderStartDate-date">14</strong>
                <span class="calenderStartDate-weekDay">Monday</span>
                <span class="calenderStartDate-month">JUN 21</span>
                <span class="calenderStartDate-time">09:00 AM</span>
            </span> 
            <img onclick="showCalender('startDateSelector')"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwLjI5MnB4IiB2aWV3Qm94PSIwIDAgMTAgMTAuMjkyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMCAxMC4yOTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBvcGFjaXR5PSIwLjgiPgoJPHBhdGggZmlsbD0iIzFFMkQ1MSIgZD0iTTcuNzYxLDUuOTdjLTEuMDUzLDAtMS45MDksMC44NTctMS45MDksMS45MWMwLDEuMDU0LDAuODU2LDEuOTA4LDEuOTA5LDEuOTA4CgkJYzEuMDU0LDAsMS45MDktMC44NTQsMS45MDktMS45MDhDOS42Nyw2LjgyOCw4LjgxNCw1Ljk3LDcuNzYxLDUuOTdMNy43NjEsNS45N3ogTTcuNzYxLDkuNDcyYy0wLjg3NywwLTEuNTkxLTAuNzE1LTEuNTkxLTEuNTkyCgkJczAuNzE0LTEuNTkyLDEuNTkxLTEuNTkyYzAuODc4LDAsMS41OTMsMC43MTUsMS41OTMsMS41OTJTOC42MzksOS40NzIsNy43NjEsOS40NzJMNy43NjEsOS40NzJ6Ii8+Cgk8cGF0aCBmaWxsPSIjMUUyRDUxIiBkPSJNOC43MTYsNy43MjFINy45MlY2LjkyNWMwLTAuMDg4LTAuMDctMC4xNTgtMC4xNTktMC4xNThjLTAuMDg4LDAtMC4xNTksMC4wNy0wLjE1OSwwLjE1OFY3Ljg4CgkJYzAsMC4wODgsMC4wNzEsMC4xNTgsMC4xNTksMC4xNThoMC45NTVjMC4wODksMCwwLjE1OS0wLjA3LDAuMTU5LTAuMTU4UzguODA1LDcuNzIxLDguNzE2LDcuNzIxTDguNzE2LDcuNzIxeiIvPgoJPHBhdGggZmlsbD0iIzFFMkQ1MSIgZD0iTTQuNzM3LDMuOTAySDEuNTU1djQuNjE0aDMuMTgyVjUuNjUzaDIuODY1VjMuOTAySDQuNzM3eiBNNi4xNyw0LjIxOWgxLjExM3YxLjExNkg2LjE3VjQuMjE5egoJCSBNMy4zMDUsNC4yMTloMS4xMTR2MS4xMTZIMy4zMDVWNC4yMTl6IE0xLjg3Myw0LjIxOWgxLjExNXYxLjExNkgxLjg3M1Y0LjIxOXogTTEuODczLDUuNjUzaDEuMTE1djEuMTEzSDEuODczVjUuNjUzegoJCSBNMi45ODgsOC4xOTdIMS44NzNWNy4wODVoMS4xMTVWOC4xOTd6IE00LjQxOSw4LjE5N0gzLjMwNVY3LjA4NWgxLjExNFY4LjE5N3ogTTQuNDE5LDYuNzY3SDMuMzA1VjUuNjUzaDEuMTE0VjYuNzY3egoJCSBNNS44NTIsNS4zMzVINC43MzdWNC4yMTlINS44NXYxLjExNkg1Ljg1MnoiLz4KCTxwYXRoIGZpbGw9IiMxRTJENTEiIGQ9Ik01LjY5MSw5LjMxM0gwLjc1OVYzLjEwNmg3LjYzOHYyLjA2OGMwLDAuMDg4LDAuMDcxLDAuMTYsMC4xNiwwLjE2YzAuMDg4LDAsMC4xNTgtMC4wNzIsMC4xNTgtMC4xNlYxLjM1NgoJCWMwLTAuMDg4LTAuMDctMC4xNTktMC4xNTgtMC4xNTlINy43NjFWMC43MTljMC0wLjA4Ny0wLjA2OS0wLjE1OS0wLjE1OS0wLjE1OUg2LjQ4OGMtMC4wOSwwLTAuMTU5LDAuMDcyLTAuMTU5LDAuMTU5djAuNDc4SDIuODI4CgkJVjAuNzE5YzAtMC4wODctMC4wNzItMC4xNTktMC4xNi0wLjE1OUgxLjU1NWMtMC4wODksMC0wLjE1OSwwLjA3Mi0wLjE1OSwwLjE1OXYwLjQ3OEgwLjZjLTAuMDg3LDAtMC4xNTksMC4wNzEtMC4xNTksMC4xNTl2OC4xMTYKCQlDMC40NDEsOS41NiwwLjUxMyw5LjYzLDAuNiw5LjYzaDUuMDkxYzAuMDg4LDAsMC4xNTgtMC4wNywwLjE1OC0wLjE1OFM1Ljc3OSw5LjMxMyw1LjY5MSw5LjMxM0w1LjY5MSw5LjMxM3ogTTYuNjQ2LDAuODc4aDAuNzk1CgkJdjAuOTU1SDYuNjQ2VjAuODc4eiBNMS43MTQsMC44NzhoMC43OTV2MC45NTVIMS43MTRWMC44Nzh6IE0wLjc1OSwxLjUxNWgwLjYzN3YwLjQ3N2MwLDAuMDg4LDAuMDcsMC4xNTksMC4xNTksMC4xNTloMS4xMTMKCQljMC4wODgsMCwwLjE2LTAuMDcxLDAuMTYtMC4xNTlWMS41MTVoMy41MDF2MC40NzdjMCwwLjA4OCwwLjA2OSwwLjE1OSwwLjE1OSwwLjE1OWgxLjExM2MwLjA4OCwwLDAuMTU4LTAuMDcxLDAuMTU4LTAuMTU5VjEuNTE1CgkJaDAuNjM3djEuMjcySDAuNzU5VjEuNTE1eiIvPgo8L2c+Cjwvc3ZnPgo="
                alt="" width="35" height="35">
        </p>
        
        <div class="calender hide">
            <div class="month">
                <i class="fa fa-arrow-left" onclick="changeMonth('prev','startDateSelector')"></i>
                <p>2021-jun</p>
                <i class="fa fa-arrow-right" onclick="changeMonth('next','startDateSelector')"></i>
            </div>
            <div class="days">
                <div>su</div>
                <div>Mo</div>
                <div>tu</div>
                <div>we</div>
                <div>th</div>
                <div>fr</div>
                <div>sa</div>
            </div>
            <div class="dates">
            </div>
        </div>

        <div class="calender_timing hide">
            <div class="wholeDate">
                <i class="fa fa-arrow-left" onclick="changeMonth('prev','endDateSelector')"></i>
                <p>Jun 13, 2021</p>
                <i class="fa fa-arrow-right" onclick="changeMonth('next','endDateSelector')"></i>
            </div>
            <div class="availableTimings">
            </div>
        </div>
    </div>
    <div class="endDateSelector">
        <p>
            <span class="endDateSpan">END DATE</span>
            <span class="calenderEndDate hide">
                <strong class="calenderEndDate-date">14</strong>
                <span class="calenderEndDate-weekDay">Monday</span>
                <span class="calenderEndDate-month">JUN 21</span>
                <span class="calenderEndDate-time">09:00 AM</span>
            </span>
            <img onclick="showCalender('endDateSelector')"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwLjI5MnB4IiB2aWV3Qm94PSIwIDAgMTAgMTAuMjkyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMCAxMC4yOTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBvcGFjaXR5PSIwLjgiPgoJPHBhdGggZmlsbD0iIzFFMkQ1MSIgZD0iTTcuNzYxLDUuOTdjLTEuMDUzLDAtMS45MDksMC44NTctMS45MDksMS45MWMwLDEuMDU0LDAuODU2LDEuOTA4LDEuOTA5LDEuOTA4CgkJYzEuMDU0LDAsMS45MDktMC44NTQsMS45MDktMS45MDhDOS42Nyw2LjgyOCw4LjgxNCw1Ljk3LDcuNzYxLDUuOTdMNy43NjEsNS45N3ogTTcuNzYxLDkuNDcyYy0wLjg3NywwLTEuNTkxLTAuNzE1LTEuNTkxLTEuNTkyCgkJczAuNzE0LTEuNTkyLDEuNTkxLTEuNTkyYzAuODc4LDAsMS41OTMsMC43MTUsMS41OTMsMS41OTJTOC42MzksOS40NzIsNy43NjEsOS40NzJMNy43NjEsOS40NzJ6Ii8+Cgk8cGF0aCBmaWxsPSIjMUUyRDUxIiBkPSJNOC43MTYsNy43MjFINy45MlY2LjkyNWMwLTAuMDg4LTAuMDctMC4xNTgtMC4xNTktMC4xNThjLTAuMDg4LDAtMC4xNTksMC4wNy0wLjE1OSwwLjE1OFY3Ljg4CgkJYzAsMC4wODgsMC4wNzEsMC4xNTgsMC4xNTksMC4xNThoMC45NTVjMC4wODksMCwwLjE1OS0wLjA3LDAuMTU5LTAuMTU4UzguODA1LDcuNzIxLDguNzE2LDcuNzIxTDguNzE2LDcuNzIxeiIvPgoJPHBhdGggZmlsbD0iIzFFMkQ1MSIgZD0iTTQuNzM3LDMuOTAySDEuNTU1djQuNjE0aDMuMTgyVjUuNjUzaDIuODY1VjMuOTAySDQuNzM3eiBNNi4xNyw0LjIxOWgxLjExM3YxLjExNkg2LjE3VjQuMjE5egoJCSBNMy4zMDUsNC4yMTloMS4xMTR2MS4xMTZIMy4zMDVWNC4yMTl6IE0xLjg3Myw0LjIxOWgxLjExNXYxLjExNkgxLjg3M1Y0LjIxOXogTTEuODczLDUuNjUzaDEuMTE1djEuMTEzSDEuODczVjUuNjUzegoJCSBNMi45ODgsOC4xOTdIMS44NzNWNy4wODVoMS4xMTVWOC4xOTd6IE00LjQxOSw4LjE5N0gzLjMwNVY3LjA4NWgxLjExNFY4LjE5N3ogTTQuNDE5LDYuNzY3SDMuMzA1VjUuNjUzaDEuMTE0VjYuNzY3egoJCSBNNS44NTIsNS4zMzVINC43MzdWNC4yMTlINS44NXYxLjExNkg1Ljg1MnoiLz4KCTxwYXRoIGZpbGw9IiMxRTJENTEiIGQ9Ik01LjY5MSw5LjMxM0gwLjc1OVYzLjEwNmg3LjYzOHYyLjA2OGMwLDAuMDg4LDAuMDcxLDAuMTYsMC4xNiwwLjE2YzAuMDg4LDAsMC4xNTgtMC4wNzIsMC4xNTgtMC4xNlYxLjM1NgoJCWMwLTAuMDg4LTAuMDctMC4xNTktMC4xNTgtMC4xNTlINy43NjFWMC43MTljMC0wLjA4Ny0wLjA2OS0wLjE1OS0wLjE1OS0wLjE1OUg2LjQ4OGMtMC4wOSwwLTAuMTU5LDAuMDcyLTAuMTU5LDAuMTU5djAuNDc4SDIuODI4CgkJVjAuNzE5YzAtMC4wODctMC4wNzItMC4xNTktMC4xNi0wLjE1OUgxLjU1NWMtMC4wODksMC0wLjE1OSwwLjA3Mi0wLjE1OSwwLjE1OXYwLjQ3OEgwLjZjLTAuMDg3LDAtMC4xNTksMC4wNzEtMC4xNTksMC4xNTl2OC4xMTYKCQlDMC40NDEsOS41NiwwLjUxMyw5LjYzLDAuNiw5LjYzaDUuMDkxYzAuMDg4LDAsMC4xNTgtMC4wNywwLjE1OC0wLjE1OFM1Ljc3OSw5LjMxMyw1LjY5MSw5LjMxM0w1LjY5MSw5LjMxM3ogTTYuNjQ2LDAuODc4aDAuNzk1CgkJdjAuOTU1SDYuNjQ2VjAuODc4eiBNMS43MTQsMC44NzhoMC43OTV2MC45NTVIMS43MTRWMC44Nzh6IE0wLjc1OSwxLjUxNWgwLjYzN3YwLjQ3N2MwLDAuMDg4LDAuMDcsMC4xNTksMC4xNTksMC4xNTloMS4xMTMKCQljMC4wODgsMCwwLjE2LTAuMDcxLDAuMTYtMC4xNTlWMS41MTVoMy41MDF2MC40NzdjMCwwLjA4OCwwLjA2OSwwLjE1OSwwLjE1OSwwLjE1OWgxLjExM2MwLjA4OCwwLDAuMTU4LTAuMDcxLDAuMTU4LTAuMTU5VjEuNTE1CgkJaDAuNjM3djEuMjcySDAuNzU5VjEuNTE1eiIvPgo8L2c+Cjwvc3ZnPgo="
                alt="" width="35" height="35">
        </p>
        <div class="calender hide">
            <div class="month">
                <i class="fa fa-arrow-left" onclick="changeMonth('prev','endDateSelector')"></i>
                <p>2021-jun</p>
                <i class="fa fa-arrow-right" onclick="changeMonth('next','endDateSelector')"></i>
            </div>
            <div class="days">
                <div>su</div>
                <div>Mo</div>
                <div>tu</div>
                <div>we</div>
                <div>th</div>
                <div>fr</div>
                <div>sa</div>
            </div>
            <div class="dates">
            </div>
        </div>
        <div class="calender_timing hide">
            <div class="wholeDate">
                <i class="fa fa-arrow-left" onclick="changeMonth('prev','endDateSelector')"></i>
                <p>Jun 13, 2021</p>
                <i class="fa fa-arrow-right" onclick="changeMonth('next','endDateSelector')"></i>
            </div>
            <div class="availableTimings">

            </div>
        </div>
    </div>
    <div class="rideNowBtn" onclick="checkStartAndEndDateCont()"><button>RIDE NOW</button></div>
</div>

</div>

</header>

<!-- main content of html starts form here -->


<div class="main_content">
<div class="app_link">
<div>
    <img src="https://www.onnbikes.com/img/playstore.svg" alt="" srcset="">
</div>
<div>
    <h2>ONN Bikes Rental App</h2>
</div>
<div>
    <img src="https://www.onnbikes.com/img/appstore.svg" alt="" srcset="">
</div>
</div>
<div class="whyONN" id="whyONNId">
<h2>Why ONN?</h2>
<p>We simplified bike rentals, so you can focus on what's important to you.</p>
<div class="whyONN_advantages flex-box-space-btw">
    <div>
        <img src="https://www.onnbikes.com/img/Safe-Rides-Icon.svg" alt="" srcset="">
        <p class="whyONN_advantage_tagLine">Safe Rides</p>
        <p class="whyONN_advantage_tagLine_content">Your safety is our priority. From sanitizing all bikes
            before every use, to extensive on-ground safety measures, your
            rides with ONN will always be safe and reliable. We also offer helmets on-demand.</p>
    </div>
    <div>
        <img src="https://www.onnbikes.com/img/Flexible-Ownership.svg" alt="" srcset="">
        <p class="whyONN_advantage_tagLine">Flexible Ownership</p>
        <p class="whyONN_advantage_tagLine_content">Enjoy the freedom of owning a two-wheeler without the
            hefty down-payments, EMIs and paperwork. Now choose from
            rent-to-own, monthly/quarterly bookings, and even daily plans.</p>
    </div>
    <div>
        <img src="https://www.onnbikes.com/img/Smarter-Mobility.svg" alt="" srcset="" class="big_img">
        <p class="whyONN_advantage_tagLine">Smarter Mobility</p>
        <p class="whyONN_advantage_tagLine_content">With your trusty ONN app, you can choose any bike, make
            instant payments, get offers, and manage all aspect of your ONN
            experience right from the comfort and ease of your mobile app.</p>
    </div>
    <div class="ONN_Stations">
        <img src="https://www.onnbikes.com/img/ONN-Stations.svg" alt="" srcset="">
        <p class="whyONN_advantage_tagLine">ONN Stations</p>
        <p class="whyONN_advantage_tagLine_content">Your local ONN Station is here to make ensure your
            two-wheeler experience is flawless. At your neighborhood station, you
            get to pick any bike, get maintenance, sanitized, and a lot more.</p>
    </div>
</div>
</div>

<div class="featuredOn">
<h2>Featured On</h2>
<p>Our complete press coverage.</p>
<div class="featuredOn_img flex-box-space-btw">
    <div>
        <img src="./images/featuredOn/featuredOn3.png" alt="" srcset="" onclick="location.href = 'http://bwdisrupt.businessworld.in/article/ONN-Bikes-Raises-Pre-Series-A-Investment-from-Z-Nation-Lab-JITO-Angels-and-Venture-Catalysts/20-11-2017-132233/'">
    </div>
    <div>
        <img src="./images/featuredOn/featuredOn2.png" alt="" srcset="" onclick="location.href = 'https://www.business-standard.com/article/news-ani/onn-bikes-raises-rs-4-5-cr-funding-towards-expansion-117112000903_1.html'">
    </div>
    <div>
        <img src="./images/featuredOn/featuredOn1.png" alt="" srcset="" onclick="location.href = 'https://www.aninews.in/news/business/business/onn-bikes-raises-rs-45-cr-funding-towards-expansion201711201813040001/'">
    </div>
    <div>
        <img src="./images/featuredOn/featuredOn4.png" alt="" srcset="" onclick="location.href = 'https://www.thenewsminute.com/article/bike-rental-startup-onn-bikes-raises-692000-pre-series-round-led-z-nation-lab-71926'">
    </div>
    <div>
        <img src="./images/featuredOn/featuredOn5.png" alt="" srcset="" onclick="location.href = 'https://www.thenewsminute.com/article/bike-rental-startup-onn-bikes-raises-692000-pre-series-round-led-z-nation-lab-71926'">
    </div>
</div>
</div>

<div class="contactUs">
<h2>Contact US</h2>
<p>Any Bike Renting Issue? Feel Free to Contact us.</p>

<div class="flex-box-space-btw contactUs_parts">
    <div class="left_contactUs">
        <div class="form">
            <div class="firstName_lastName flex-box-space-btw">
                <div>
                    <span><i class="fas fa-user"></i></span>
                    <input type="text" placeholder="First Name" id="first_name">
                </div>
                <div>
                    <span><i class="fas fa-user"></i></span>
                    <input type="text" placeholder="Last Name" id="last_name">
                </div>
            </div>

            <div>
                <span><i class="fas fa-envelope"></i></span>
                <input type="text" placeholder="Email" id="email">
            </div>
            <div>
                <span><i class="fas fa-phone-alt"></i></span>
                <input type="text" placeholder="Mobile Number" id="mobile_number">
            </div>

            <div class="form_collapse_Container">
                <span><i class="fas fa-envelope"></i></span>
                <button class="collapse-btn-form" onclick="showFormCity()">Bengaluru</button>
                <div class="collapse-content-form" id="formOptionBox">
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Bengaluru')">BENGALURU</div>
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Hyderabad')">HYDERABAD</div>
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Jaipur')">JAIPUR</div>
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Mysuru')">MYSURU</div>
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Pune')">PUNE</div>
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Udaipur')">UDAIPUR</div>
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Ahmedabad')">AHMEDABAD</div>
                    <div onclick="changeCollapseBtnValue('collapse-btn-form','Franchise')">FRANCHISE</div>
                </div>
            </div>

            <div>
                <span><i class="fas fa-info"></i></span>
                <textarea name="" id="message_textArea" cols="103" rows="4"
                    placeholder="Message"></textarea>
            </div>
            <div>
                <button id="submit_contactUs">Submit</button>
            </div>
        </div>
    </div>

    <div class="right_contactUs accordian_container">
        <div class="collapse-container">
            <button class="collapse-btn">MUMBAI - CORPORATE HQ</button>
            <div class="collapse-content">
                <h5>Motocruizer Technologies (I) Pvt. Ltd.</h5>
                <p>Office No. 8, Floor-3, Plot-422, Nav Bhavna, Swatantrya Veer Savarkar Road, Prabhadevi
                    Mumbai Mumbai City MH 400025 IN</p>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">BENGALURU</button>
            <div class="collapse-content">
                <ul>
                    <li>
                        <p>KORAMANGALA</p>
                        <p>No 150/1 and 2, Hosur Main Road, Opposite Big Bazaar, Next to Raja Honda,
                            Koramangala, Bengaluru - 560095</p>
                    </li>
                    <li>
                        <p>ELECTRONIC CITY</p>
                        <p>#634/472, Doddathogur, Velankani Gate, Electronic City Phase 1, Electronics City
                            Phase,Bengaluru 560100</p>
                    </li>
                    <li>
                        <p>MS RAMAIAH COLLEGE</p>
                        <p>Ground Floor, Sree Premprasad Complex, Opposite Ramaiah Hospital, New BEL Road, M
                            S Ramaiah College, Bengaluru - 560054</p>
                    </li>
                    <li>
                        <p>KUNDALAHALLI</p>
                        <p>Munni Reddy Complex, Varthur Main Road, Opposite Nadhini Wines, Silver Springs
                            Layout, Kundalahalli, Bengaluru - 560066</p>
                    </li>
                    <li>
                        <p>YELAHANKA</p>
                        <p>200/1, KV SR Layout, Kattigenahalli, Bagalur Main Road, Next to Reliance Fresh,
                            Bengaluru - 560063</p>
                    </li>
                    <li>
                        <p>SILK BOARD SRCM</p>
                        <p>28, Hosur Road, Madiwala, Balaji Nagar, BTM Layout 1, Central Silk Board Colony,
                            Stage 2, BTM Layout, Bengaluru,
                            Karnataka 560068</p>
                    </li>
                    <li>
                        <p>ELECTRONIC CITY HUB</p>
                        <p>#634/472, Doddathogur, Velankani Gate, Electronic City Phase 1, Electronics City
                            Phase,Bengaluru 560100</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">HYDERABAD</button>
            <div class="collapse-content">
                <ul>
                    <li>
                        <p>MADHAPUR</p>
                        <p>Plot No.539, Ayyappa Society, 100ft Road, Madhapur, Hyderabad</p>
                    </li>
                    <li>
                        <p>GACHIBOWLI</p>
                        <p>Vision Ultima Building, Behind Radisson Hotel, Gachibowli, Hyderabad</p>
                    </li>
                    <li>
                        <p>AMEERPET</p>
                        <p>Swati Manor, Beside Aditya Trade center, Kumar Basti, Ameerpet, Hyderabad,
                            Telangana 500082</p>
                    </li>
                    <li>
                        <p>DILSUKHNAGAR</p>
                        <p>16-2-741/29 & 37, Anushka Towers, Bank colony, New malakpet, Dilsukhnagar.
                            LandMark:- Beside DTDC Courier & Oasis
                            Reproductive Hospital.</p>
                    </li>
                    <li>
                        <p>SECUNDERABAD</p>
                        <p>Opposite to Yeshoda Hospital Parking Alexander Rd, Kummari Guda, Shivaji Nagar,
                            Secunderabad, Telangana 500003.</p>
                    </li>
                    <li>
                        <p>RAIDURGAM POLICE COMMISSIONARATE</p>
                        <p>OYO 3607 Apartment Gachibowli under Stilt parking. Plot No 33 & 34, Udaya Elite,
                            Beside Care Hospital lane, Besides
                            Cyberabad Police commissionerate,Gachibowli, Hyderabad, Telangana 500032</p>
                    </li>
                    <li>
                        <p>CHANDA NAGAR</p>
                        <p>Akshita Spaces, Second Floor, Plot # 194p, Rajendar Reddy Nagar Colony, Ameenpur
                            Road, Chanda Nagar, Hyd -500050.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">JAIPUR</button>
            <div class="collapse-content">
                <ul>
                    <li>
                        <p>GT - GAURAV TOWER</p>
                        <p>Malviya Nagar Road, D-Block, Malviya Nagar, D-Block, Crystal Court, Malviya
                            Nagar, Jaipur, Rajasthan 302017</p>
                    </li>
                    <li>
                        <p>GOLD SOUK GRAND MALL -JAWAHAR CIRCLE</p>
                        <p>Gold Souk Grand Mall (Near Hotel Lalit, Basement 2 Parking), Jaipur, Rajasthan
                            302001</p>
                    </li>
                    <li>
                        <p>C SCHEME</p>
                        <p>Man Upasana C-44 Sardar Patel Marg Panch Batti, C Scheme, Ashok Nagar Jaipur,
                            Rajasthan 302001</p>
                    </li>
                    <li>
                        <p>NEW AATISH MARKET- METRO STATION</p>
                        <p>New Aatish Market Metro station, Gurjar ki Thadi Underpass, Sultan Nagar, Shanthi
                            Nagar,Near Metro Station, Mansarovar,
                            Jaipur, Rajasthan 302020</p>
                    </li>
                    <li>
                        <p>JAGATPURA ROAD</p>
                        <p>Jagatpura Rd, Beside Credr Showroom, Shyam Vihar Colony, Malviya Nagar, Jaipur,
                            Rajasthan 302017</p>
                    </li>
                    <li>
                        <p>RAJA PARK</p>
                        <p>Das and Yadav Complex, Panchwati Circle, Raja Park, Jaipur, Rajasthan 302004</p>
                    </li>
                    <li>
                        <p>MANSAROVAR- SHIPRA PATH</p>
                        <p>34/17, Shipra path,Opposite Reil house, Mansarovar, Jaipur-302020</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">MYSURU</button>
            <div class="collapse-content">
                <ul>
                    <li>
                        <p>INFOSYS</p>
                        <p>Shobhja Gate, Hebbal Industrial Area, Meenakunte, Hebbal Industrial Estate,
                            Mysuru, Karnataka 570016</p>
                    </li>
                    <li>
                        <p>JAGANMOHAN PALACE</p>
                        <p>425 - 426, Deshika Road, Opp. Jaganmohan Palace, Subbarayanakere, Chamrajpura,
                            Mysuru, Karnataka 570024</p>
                    </li>
                    <li>
                        <p>GOKULAM</p>
                        <p>350, 5th Main Rd, Gokulam 2nd Stage, Gokulam, Mysuru, Karnataka 570002</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">PUNE</button>
            <div class="collapse-content">
                <h5>Motocruizer Technologies (I) Pvt. Ltd.</h5>
                <p>Office No. 8, Floor-3, Plot-422, Nav Bhavna, Swatantrya Veer Savarkar Road, Prabhadevi
                    Mumbai Mumbai City MH
                    400025 IN</p>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">UDAIPUR</button>
            <div class="collapse-content">
                <ul>
                    <li>
                        <p>UDAIPOLE</p>
                        <p>Shop NO-6, Arihant Plaza ,Opposite ICICI Bank Udaipole ,Udaipur-313001</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">AHMEDABAD</button>
            <div class="collapse-content">
                <ul>
                    <li>
                        <p>VIJAY CROSS ROAD</p>
                        <p>The Link, Nr. Vijay Cross Road, Navrangpura, Ahmedabad 380009</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse-container">
            <button class="collapse-btn">GURGAON</button>
            <div class="collapse-content">
                <ul>
                    <li>
                        <p>Omaxe celebration mall</p>
                        <p>2nd floor, office, near Subash chowk, gurgaon 122001</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</div>
</div>

</div>`
}
export {body1}