import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BootstrapElementsComponent } from './components/bootstrap-elements/bootstrap-elements.component';
import { CardsComponent } from './components/cards/cards.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { MembersComponent } from './components/members/members.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { GetComponent } from './components/members/get/get.component';
import { PostComponent } from './components/members/post/post.component';
import { PutComponent } from './components/members/put/put.component';
import { DeleteComponent } from './components/members/delete/delete.component';
import { TooltipDirective } from './components/directives/tooltip.directive';
import { DeleteAllComponent } from './components/members/delete-all/delete-all.component';
import { ManagePromotionsComponent } from './components/manage-promotions/manage-promotions.component';
import { StoreComponent } from './components/store/store.component';
import { UseServicesComponent } from './components/use-services/use-services.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ManageServiceRequestsComponent } from './components/manage-service-requests/manage-service-requests.component';
import { ServiceRequestInformationComponent } from './components/service-request-information/service-request-information.component';
import { ManagereFundsComponent } from './components/managere-funds/managere-funds.component';
import { EditMembersComponent } from './components/edit-members/edit-members.component';
import { DetailMembersComponent } from './components/detail-members/detail-members.component';

@NgModule({
    imports: [
        CommonModule,
        AuthenticationRouting,
        SharedsModule,
        // HttpClientModule
    ],
    declarations: [
        DashboardComponent,
        SettingComponent,
        ProfileComponent,
        BootstrapElementsComponent,
        CardsComponent,
        WidgetsComponent,
        MembersComponent,
        MemberCreateComponent,
        ChangePasswordComponent,
        GetComponent,
        PostComponent,
        PutComponent,
        DeleteComponent,
        TooltipDirective,
        DeleteAllComponent,
        ManagePromotionsComponent,
        StoreComponent,
        UseServicesComponent,
        PromotionComponent,
        ManageServiceRequestsComponent,
        ServiceRequestInformationComponent,
        ManagereFundsComponent,
        EditMembersComponent,
        DetailMembersComponent

    ]
})
export class AuthenticationModule { }
