import React from 'react'
import { Element } from 'react-scroll'
import dexaran from '../images/dexaran_avatar.png'
import yohan from '../images/yohan_avatar.jpeg'
import sampol from '../images/sampol_avatar.jpg'
import dardan from '../images/dardan_avatar.png'
import darwino from '../images/darwino_avatar.png'
import methw from '../images/methw_avatar.png'
import nsawinyh from '../images/nsawinyh_avatar.png'

const Team = () => (
  <Element className="Team container" name="Team">
    <h2 className="Team-title">
      Callisto Team
    </h2>
    <p className="Team-subtitle">
      Meet the people that are going to take your business to the next level.
    </p>
    <div className="Team-list">
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={dexaran} alt="Dexaran" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Dexaran</span>
            <span className="Team-list-element-detail-position">CEO</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">Co Founder of Callisto</span>
            <a
              href="mailto:dexaran@callisto.network"
              className="Team-list-element-detail-mail"
            >
              dexaran@callisto.network
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={yohan} alt="Yohan Graterol" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Yohan Graterol</span>
            <span className="Team-list-element-detail-position">CTO</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">Co Founder of Callisto</span>
            <a
              href="mailto:yograterol@callisto.network"
              className="Team-list-element-detail-mail"
            >
              yograterol@callisto.network
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={sampol} alt="Carlos Sampol" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Carlos Sampol</span>
            <span className="Team-list-element-detail-position">Development Team</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">React Developer</span>
            <a
              href="mailto:s@callisto.network"
              className="Team-list-element-detail-mail"
            >
              s@callisto.network
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={dardan} alt="Dardan Latifi" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Dardan Latifi</span>
            <span className="Team-list-element-detail-position">Team Member</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">Storage engineer, Crypto enthousiast, Marketing & Support</span>
            <a
              href="mailto:s@callisto.network"
              className="Team-list-element-detail-mail"
            >
              dardan@callisto.network
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={darwino} alt="darwino" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Darwino</span>
            <span className="Team-list-element-detail-position">Callisto Indonesia Ambassador</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">Social Media Callisto Support Community Manager</span>
            <a
              href="https://t.me/Darwino"
              target="_blank"
              className="Team-list-element-detail-mail"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={methw} alt="Methw" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Methw</span>
            <span className="Team-list-element-detail-position">Team Member</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">QA & Technical Documentation Writer</span>
            <a
              href="mailto:s@callisto.network"
              className="Team-list-element-detail-mail"
            >
              methw@callisto.network
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={nsawinyh} alt="Mario Michel" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Nick Sawinyh</span>
            <span className="Team-list-element-detail-position">Team Member</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">Head of Marketing</span>
            <a
              href="mailto:nsawinyh@callisto.network"
              className="Team-list-element-detail-mail"
            >
              nsawinyh@callisto.network
            </a>
          </div>
        </div>
      </div>
    </div>
  </Element>
)

export default Team
