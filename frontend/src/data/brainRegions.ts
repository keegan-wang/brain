export interface BrainRegionInfo {
  id: string;
  name: string;
  description: string;
  functions: string[];
  activation: string[];
  color: string;
}

export const BRAIN_REGIONS: BrainRegionInfo[] = [
  {
    id: 'frontal_lobe',
    name: 'Frontal Lobe',
    description: 'The executive control center responsible for planning, decision-making, problem-solving, and personality.',
    functions: ['Executive function', 'Planning', 'Decision making', 'Working memory'],
    activation: ['Complex puzzles', 'Strategic planning', 'Learning new skills', 'Mental challenges'],
    color: '#7aa2f7'
  },
  {
    id: 'parietal_lobe',
    name: 'Parietal Lobe',
    description: 'Processes sensory information and integrates spatial awareness, touch, and body position.',
    functions: ['Spatial processing', 'Sensory integration', 'Attention', 'Body awareness'],
    activation: ['Spatial puzzles', 'Navigation tasks', 'Touch exercises', 'Coordination activities'],
    color: '#8bd5ca'
  },
  {
    id: 'temporal_lobe',
    name: 'Temporal Lobe',
    description: 'Processes auditory information, language comprehension, and memory formation.',
    functions: ['Auditory processing', 'Language comprehension', 'Memory formation', 'Sound recognition'],
    activation: ['Listening to music', 'Language learning', 'Auditory training', 'Memory exercises'],
    color: '#4ecdc4'
  },
  {
    id: 'occipital_lobe',
    name: 'Occipital Lobe',
    description: 'Primary visual processing center that interprets visual information from the eyes.',
    functions: ['Visual processing', 'Pattern recognition', 'Color detection', 'Motion tracking'],
    activation: ['Visual tasks', 'Art appreciation', 'Reading', 'Video games'],
    color: '#a7c957'
  },
  {
    id: 'insula',
    name: 'Insula',
    description: 'Processes internal body sensations, emotions, and empathy.',
    functions: ['Interoception', 'Emotional awareness', 'Empathy', 'Self-awareness'],
    activation: ['Mindfulness meditation', 'Body awareness exercises', 'Emotional processing', 'Breathing exercises'],
    color: '#f7768e'
  },
  {
    id: 'thalamus',
    name: 'Thalamus',
    description: 'Relay station that processes and transmits sensory and motor information to the cortex.',
    functions: ['Sensory relay', 'Motor relay', 'Arousal', 'Attention filtering'],
    activation: ['Sensory stimulation', 'Attention exercises', 'Multi-sensory activities', 'Focus training'],
    color: '#c6a0f6'
  },
  {
    id: 'cerebellum',
    name: 'Cerebellum',
    description: 'Coordinates movement, balance, posture, and contributes to cognitive functions.',
    functions: ['Balance', 'Motor coordination', 'Motor learning', 'Cognitive coordination'],
    activation: ['Balance exercises', 'Dance', 'Sports', 'Coordination training'],
    color: '#ff6b9d'
  },
  {
    id: 'brainstem',
    name: 'Brainstem',
    description: 'Controls vital functions like breathing, heart rate, and consciousness.',
    functions: ['Vital functions', 'Arousal', 'Sleep regulation', 'Reflexes'],
    activation: ['Breathing exercises', 'Meditation', 'Sleep optimization', 'Stress management'],
    color: '#ffa500'
  },
  {
    id: 'hippocampus',
    name: 'Hippocampus',
    description: 'Essential for memory formation, spatial navigation, and learning new information.',
    functions: ['Memory formation', 'Spatial navigation', 'Pattern recognition', 'Learning'],
    activation: ['Memory games', 'Learning new routes', 'Studying', 'Spatial puzzles'],
    color: '#95e1d3'
  },
  {
    id: 'amygdala',
    name: 'Amygdala',
    description: 'Processes emotions, especially fear, and plays a key role in emotional memory.',
    functions: ['Threat detection', 'Emotional memory', 'Fight-or-flight response', 'Social emotions'],
    activation: ['Emotional experiences', 'Novel situations', 'Social interactions', 'Stress response'],
    color: '#f7768e'
  },
  {
    id: 'caudate_nucleus',
    name: 'Caudate Nucleus',
    description: 'Part of the basal ganglia involved in motor control and learning.',
    functions: ['Motor control', 'Habit formation', 'Goal-directed behavior', 'Learning'],
    activation: ['Skill practice', 'Habit formation', 'Goal setting', 'Motor learning'],
    color: '#9d7cd8'
  },
  {
    id: 'putamen',
    name: 'Putamen',
    description: 'Controls movement and motor skills, involved in procedural learning.',
    functions: ['Motor control', 'Movement regulation', 'Procedural learning', 'Motor habits'],
    activation: ['Repetitive movements', 'Motor skills practice', 'Exercise', 'Manual tasks'],
    color: '#e0af68'
  },
  {
    id: 'globus_pallidus',
    name: 'Globus Pallidus',
    description: 'Regulates voluntary movement by controlling motor output.',
    functions: ['Movement regulation', 'Motor control', 'Action selection', 'Motor inhibition'],
    activation: ['Controlled movements', 'Precision tasks', 'Motor planning', 'Movement inhibition'],
    color: '#73daca'
  },
  {
    id: 'nucleus_accumbens',
    name: 'Nucleus Accumbens',
    description: 'Reward center that processes pleasure, motivation, and reinforcement learning.',
    functions: ['Reward processing', 'Motivation', 'Pleasure', 'Addiction responses'],
    activation: ['Enjoyable activities', 'Achievement goals', 'Social rewards', 'Learning rewards'],
    color: '#bb9af7'
  },
  {
    id: 'default_mode_network_DMN',
    name: 'Default Mode Network',
    description: 'Active during rest and introspection, involved in self-referential thinking.',
    functions: ['Self-reflection', 'Mind wandering', 'Autobiographical memory', 'Future planning'],
    activation: ['Meditation', 'Daydreaming', 'Self-reflection', 'Rest periods'],
    color: '#7dcfff'
  },
  {
    id: 'dorsal_attention_network_DAN',
    name: 'Dorsal Attention Network',
    description: 'Controls goal-directed, top-down attention and focus.',
    functions: ['Focused attention', 'Goal-directed behavior', 'Cognitive control', 'Task focus'],
    activation: ['Focused tasks', 'Concentration exercises', 'Goal pursuit', 'Attention training'],
    color: '#f7768e'
  },
  {
    id: 'ventral_attention_network_VAN',
    name: 'Ventral Attention Network',
    description: 'Processes stimulus-driven attention and responds to unexpected events.',
    functions: ['Stimulus detection', 'Alertness', 'Reorienting attention', 'Surprise response'],
    activation: ['Novel stimuli', 'Unexpected events', 'Alertness training', 'Environment scanning'],
    color: '#ff9e64'
  },
  {
    id: 'frontoparietal_control_network_FPCN',
    name: 'Frontoparietal Control Network',
    description: 'Flexible control system that adapts to task demands and cognitive control.',
    functions: ['Cognitive flexibility', 'Task switching', 'Adaptive control', 'Executive control'],
    activation: ['Multitasking', 'Problem solving', 'Cognitive flexibility exercises', 'Task switching'],
    color: '#9ece6a'
  },
  {
    id: 'salience_network',
    name: 'Salience Network',
    description: 'Identifies relevant stimuli and switches between different brain networks.',
    functions: ['Salience detection', 'Network switching', 'Relevance assessment', 'Attention switching'],
    activation: ['Important decision making', 'Prioritization tasks', 'Relevance judgments', 'Focus switching'],
    color: '#e0af68'
  }
];

// Generate mock time-series data for brain usage
export function generateMockUsageData(days: number = 7): Record<string, Array<{time: string, value: number}>> {
  const data: Record<string, Array<{time: string, value: number}>> = {};

  BRAIN_REGIONS.forEach(region => {
    data[region.id] = [];

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      // Generate realistic usage patterns based on region type
      let baseValue = 20;
      if (region.id.includes('visual') || region.id === 'occipital_lobe') baseValue = 60;
      if (region.id.includes('motor') || region.id === 'cerebellum') baseValue = 40;
      if (region.id.includes('frontal') || region.id.includes('attention')) baseValue = 45;

      // Add some variation
      const variation = Math.random() * 30 - 15;
      const value = Math.max(10, Math.min(90, baseValue + variation));

      data[region.id].push({
        time: date.toISOString().split('T')[0],
        value: Math.round(value)
      });
    }
  });

  return data;
}