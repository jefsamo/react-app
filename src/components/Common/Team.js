import React, { Component } from "react";
import TeamMember from "./TeamMember";

const team = [
  { num: 2, role: "Lead Developer", name: "Olawale John" },
  { num: 1, role: "Lead Designer", name: "Adegoke Pelumi" },
  { num: 3, role: "Web Designer", name: "Tomisin Adekunle" },
];

class Team extends Component {
  state = {};
  render() {
    return (
      <section class="page-section bg-light" id="team">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div class="row">
            {team.map((member, i) => {
              return <TeamMember {...member} key={i} />;
            })}
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
