import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import Card from '../../../src/components/common/Card.vue'

describe('Card', ()=>{
  it('should render the Pokemon name correctly', () => {
    const pokemon = {
      id: 1,
      name: 'Pikachu',
      imageUrl: 'https://example.com/pikachu.png'
    };

    const wrapper = mount(Card, {
      propsData: {
        pokemon: pokemon
      }
    });

    const nameElement = wrapper.find('.name');
    expect(nameElement.text()).toBe('Pikachu');
    
    const imageElement = wrapper.find('img');
    expect(imageElement.attributes('src')).toBe('https://example.com/pikachu.png');
    expect(imageElement.attributes('alt')).toBe('Pokemon');
  });
});

