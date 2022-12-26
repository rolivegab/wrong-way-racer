import { Axis2d } from "../types/axis2d.type";

type State = {
  position: Axis2d;
  velocity: Axis2d;
};

type Options = {
  stiffness: number;
  mass: number;
  damping: number;
};

/**
 * Based on https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations/
 */
export const calculateNextSpringPosition = (
  { position, velocity }: State,
  { damping, mass, stiffness }: Options,
  delta: number,
  to: Axis2d
) => {
  /* Spring stiffness, in kg / s^2 */
  const k = -stiffness;

  /* Damping constant, in kg / s */
  const d = -damping;

  const fSpringX = k * (position.x - to.x);
  const fSpringY = k * (position.y - to.y);

  const fDampingX = d * velocity.x;
  const fDampingY = d * velocity.y;

  const ax = (fSpringX + fDampingX) / mass;
  const ay = (fSpringY + fDampingY) / mass;

  velocity.x += ax * delta;
  velocity.y += ay * delta;
  position.x += velocity.x * delta;
  position.y += velocity.y * delta;

  return {
    velocity,
    position,
  };
};
