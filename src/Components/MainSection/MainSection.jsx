import React from 'react';
import Avatar from '../../avatar.png';
import './MainSection.css';
import Navbar from '../Navbar/Navbar';
import Typed from 'typed.js';

function MainSection (){
    // var options = {
    //     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    //     typeSpeed: 40
    // };

    // var typed = new Typed('.element', options);

    let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 10000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 1000;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        let elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    return (
        <div className='main-container'>

            <Navbar/>

            <div className='avatar-description-container'>
                <div className='avatar-container'>
                    <img src={Avatar} alt="avatar" className='avatar-image'/>
                </div>
                        
                <div className= 'personal-description'>
                    <h1>Julieta García</h1>
                    <span className='element' > {}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainSection