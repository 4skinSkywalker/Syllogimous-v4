import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SyllogimousComponent } from './syllogimous.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalLevelChangeComponent } from './components/modal-level-change/modal-level-change.component';
import { CardComponent } from './components/card/card.component';
import { IntroComponent } from './pages/intro/intro.component';
import { StartComponent } from './pages/start/start.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { HistoryComponent } from './pages/history/history.component';
import { GameComponent } from './pages/game/game.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { StatsComponent } from './pages/stats/stats.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { EnumScreens } from './models/syllogimous.models';
import { TutorialDistinctionComponent } from './pages/tutorial/distinction/distinction.component';
import { TutorialSyllogismComponent } from './pages/tutorial/syllogism/syllogism.component';
import { TutorialComparisonNumericalComponent } from './pages/tutorial/comparison-numerical/comparison-numerical.component';
import { TutorialComparisonChronologicalComponent } from './pages/tutorial/comparison-chronological/comparison-chronological.component';
import { TutorialDirectionComponent } from './pages/tutorial/direction/direction.component';
import { TutorialDirection3DComponent } from './pages/tutorial/direction3D/direction3D.component';
import { TutorialDirection4DComponent } from './pages/tutorial/direction4D/direction4D.component';
import { TutorialAnalogyComponent } from './pages/tutorial/analogy/analogy.component';
import { TutorialBinaryComponent } from './pages/tutorial/binary/binary.component';
import { EnumQuestionType } from './models/question.models';
import { AccuracyStatsComponent } from './pages/stats/accuracy-stats/accuracy-stats.component';
import { ErrorAnalysisComponent } from './pages/stats/error-analysis/error-analysis.component';
import { TierStatsComponent } from './pages/stats/tier-stats/tier-stats.component';
import { TimeBasedStatsComponent } from './pages/stats/time-based-stats/time-based-stats.component';
import { TypeBasedStatsComponent } from './pages/stats/type-based-stats/type-based-stats.component';
import { StatsExportService } from './services/stats-export.service';

const routes: Routes = [
  {
    path: '',
    component: SyllogimousComponent,
    children: [
      { path: "", redirectTo: EnumScreens.Intro, pathMatch: "full" },
      { path: EnumScreens.Intro, component: IntroComponent },
      { path: EnumScreens.Start, component: StartComponent },
      { path: EnumScreens.Game, component: GameComponent },
      { path: EnumScreens.History, component: HistoryComponent },
      { path: EnumScreens.Feedback, component: FeedbackComponent },
      { path: EnumScreens.Tutorials, component: TutorialsComponent },
      { 
        path: EnumScreens.Tutorial,
        component: TutorialComponent,
        children: [
          { path: EnumQuestionType.Distinction, component: TutorialDistinctionComponent },
          { path: EnumQuestionType.Syllogism, component: TutorialSyllogismComponent },
          { path: EnumQuestionType.ComparisonNumerical, component: TutorialComparisonNumericalComponent },
          { path: EnumQuestionType.ComparisonChronological, component: TutorialComparisonChronologicalComponent },
          { path: EnumQuestionType.Direction, component: TutorialDirectionComponent },
          { path: EnumQuestionType.Direction3D, component: TutorialDirection3DComponent },
          { path: EnumQuestionType.Direction4D, component: TutorialDirection4DComponent },
          { path: EnumQuestionType.Analogy, component: TutorialAnalogyComponent },
          { path: EnumQuestionType.Binary, component: TutorialBinaryComponent },
        ]
      },
      { path: EnumScreens.Stats, component: StatsComponent },
    ]
  }
];

@NgModule({
  declarations: [
    SyllogimousComponent,
    CardComponent,
    ModalLevelChangeComponent,
    IntroComponent,
    StartComponent,
    HistoryComponent,
    GameComponent,
    FeedbackComponent,
    TutorialsComponent,
    TutorialComponent,
    TutorialDistinctionComponent,
    TutorialSyllogismComponent,
    TutorialComparisonNumericalComponent,
    TutorialComparisonChronologicalComponent,
    TutorialDirectionComponent,
    TutorialDirection3DComponent,
    TutorialDirection4DComponent,
    TutorialAnalogyComponent,
    TutorialBinaryComponent,
    StatsComponent,
    AccuracyStatsComponent,
    ErrorAnalysisComponent,
    TierStatsComponent,
    TimeBasedStatsComponent,
    TypeBasedStatsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
      StatsExportService
  ]
})
export class SyllogimousModule { }